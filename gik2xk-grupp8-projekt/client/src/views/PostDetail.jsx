import PostItemLarge from '../components/PostItemLarge';
import CommentForm from '../components/CommentForm';
import Comment from '../components/Comment';
import { Alert, Box, Button, Container, List, Typography } from '@mui/material';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { addComment, getOne } from '../services/PostService';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import EditIcon from '@mui/icons-material/Edit';

function PostDetail() {
  const { id } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    getOne(id).then((post) => setPost(post));
  }, [id]);

  const navigate = useNavigate();

  function onCommentAdd(comment) {
    addComment(post.id, comment)
      .then((comment) => getOne(id))
      .then((post) => setPost(post));
  }
  const location = useLocation();
  const message = location.state?.message;
  const [open, setOpen] = useState(true);

  function clearMessage() {
    window.history.replaceState({}, '');
  }

  return post ? (
    <>
      {message && open && (
        <Alert
          onClose={() => {
            setOpen(false);
            clearMessage();
          }}
          variant="filled"
          severity="success">
          {message}
        </Alert>
      )}
      <Container maxWidth="lg">
        <PostItemLarge post={post} />
        <Box display="flex" justifyContent="space-between" mb={4}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<ChevronLeftIcon />}
            sx={{ mr: 2 }}
            onClick={() => navigate(-1)}>
            Tillbaka
          </Button>
          <Button
            startIcon={<EditIcon />}
            variant="contained"
            onClick={() => navigate(`/posts/${post.id}/edit`)}>
            Ändra
          </Button>
        </Box>
        <Box>
          <Typography variant="h3">Kommentarer</Typography>
          <CommentForm onSave={onCommentAdd} />
          {post.comments && (
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              {post.comments.map((comment, i) => (
                <Comment key={`comment_${i}`} comment={comment} />
              ))}
            </List>
          )}
        </Box>
      </Container>
    </>
  ) : (
    <h3>Kunde inte hämta inlägg</h3>
  );
}

export default PostDetail;
