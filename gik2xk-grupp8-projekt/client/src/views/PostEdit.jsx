import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { create, getOne, remove, update } from '../services/PostService';
import {
  Box,
  Button,
  Chip,
  Container,
  TextField,
  Typography
} from '@mui/material';
import TagField from '../components/TagField';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

function PostEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const emptyPost = {
    id: 0,
    title: '',
    body: '',
    imageUrl: '',
    tags: [],
    userId: 2
  };
  const [post, setPost] = useState(emptyPost);

  useEffect(() => {
    if (id) {
      getOne(id).then((post) => setPost(post));
    } else {
      setPost(emptyPost);
    }
  }, [id]);

  function onChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    const newPost = { ...post, [name]: value };
    setPost(newPost);
  }

  function onSave() {
    if (post.id === 0) {
      create(post).then((response) => {
        navigate('/', {
          replace: true,
          state: { message: `Inlägget ${response.title} skapades.` }
        });
      });
    } else {
      update(post).then((response) =>
        navigate(`/posts/${post.id}`, { replace: true, state: response })
      );
    }
  }

  function onDelete() {
    remove(post.id).then((response) =>
      navigate('/', { replace: true, state: response })
    );
  }

  function onTagAdd(tagString) {
    //splitta arrayen vid kommatecken
    const tagArray = tagString.split(',');
    //trimma whitespace runt taggar
    const uniqueAndTrimmedTags = tagArray
      .map((tag) => tag.trim())
      .filter((tag) => !post.tags.includes(tag));

    //slå samman befintlig tag-array med de nya, unika taggarna
    const mergedArray = [...post.tags, ...uniqueAndTrimmedTags];

    //spara befintligt inlägg med nya tags-arrayen till state.
    setPost({ ...post, tags: mergedArray });
  }

  function onTagDelete(tagToDelete) {
    const newTags = post.tags.filter((tag) => tag !== tagToDelete);

    setPost({ ...post, tags: newTags });
  }
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h2">
        {post.id ? 'Ändra inlägg' : 'Skapa inlägg'}
      </Typography>
      <Box mt={4}>
        <form>
          <Box>
            <TextField
              fullWidth
              margin="normal"
              onChange={onChange}
              value={post.title}
              name="title"
              id="title"
              label="Titel"
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              margin="normal"
              onChange={onChange}
              value={post.body}
              multiline
              minRows={5}
              name="body"
              id="body"
              label="Innehåll"
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              margin="normal"
              onChange={onChange}
              value={post.imageUrl}
              name="imageUrl"
              id="imageUrl"
              label="Sökväg till bild"
            />
          </Box>
          <Box mt={1}>
            {post?.tags?.length > 0 &&
              post.tags.map((tag) => (
                <Chip
                  sx={{ mr: 1 }}
                  onDelete={() => onTagDelete(tag)}
                  key={tag}
                  label={tag}
                />
              ))}
          </Box>
          <Box mt={2}>
            <TagField onSave={onTagAdd} />
          </Box>
          <Box display="flex" mt={2}>
            <Box flexGrow={1}>
              <Button
                startIcon={<ChevronLeftIcon />}
                sx={{ mr: 1 }}
                variant="contained"
                onClick={() => navigate(-1)}>
                Tillbaka
              </Button>
              {id && (
                <Button
                  startIcon={<DeleteIcon />}
                  onClick={onDelete}
                  variant="contained"
                  color="error">
                  Ta bort
                </Button>
              )}
            </Box>
            <Button
              startIcon={<SaveIcon />}
              onClick={onSave}
              variant="contained"
              color="success">
              Spara
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default PostEdit;
