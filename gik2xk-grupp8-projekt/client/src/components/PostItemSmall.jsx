import { Link, useNavigate } from 'react-router-dom';
import Tag from './Tag';
import UserItemSmall from './UserItemSmall';
import { toRelativeDateString, truncate } from '../common/formatHelpers';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography
} from '@mui/material';
import placeholderImage from '../assets/placeholder.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { grey } from '@mui/material/colors';

function PostItemSmall({ post }) {
  const navigate = useNavigate();

  return (
    <>
      <Card variant="outlined" sx={{ mb: 4 }}>
        <CardHeader
          title={
            <Typography variant="h3">
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </Typography>
          }
          subheader={`Skrivet: ${toRelativeDateString(post.createdAt)}`}
          avatar={
            <UserItemSmall
              style={{
                minWidth: '7rem',
                paddingRight: '.7rem',
                marginRight: '.5rem',
                borderRight: `1px solid ${grey[400]}`
              }}
              user={post.author}
            />
          }
        />
        <CardMedia
          component="img"
          height="300"
          image={post.imageUrl || placeholderImage}
          alt={`Bild till ${post.title}`}
        />
        <CardContent>
          <Box mb={2}>
            {post.tags.length > 0 &&
              post.tags.map((tag) => <Tag key={tag} text={tag} />)}
          </Box>

          <Typography variant="body2">{truncate(post.body, 500)}</Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            onClick={() => navigate(`/posts/${post.id}`)}
            endIcon={<ChevronRightIcon />}>
            Läs mer
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default PostItemSmall;
