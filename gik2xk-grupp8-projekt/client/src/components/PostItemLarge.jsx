import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography
} from '@mui/material';
import Tag from './Tag';
import UserItemSmall from './UserItemSmall';
import { toDateTimeString } from '../common/formatHelpers';
import placeholderImage from '../assets/placeholder.png';

function PostItemLarge({ post }) {
  return (
    <Paper sx={{ my: 4, p: 4, borderRadius: 2 }} elevation={3}>
      <Box>
        <UserItemSmall style={{ marginBottom: '.3rem' }} user={post.author} />
        <Typography variant="h2">{post.title}</Typography>
        <Typography>
          Inlägget publicerades: {toDateTimeString(post.createdAt)}
        </Typography>
      </Box>
      <Card elevation={0}>
        <CardMedia component="img" image={post.imageUrl || placeholderImage} />
        <CardContent>
          {post.tags &&
            post.tags.map((tag) => <Tag key={`tag_${tag}`} text={tag} />)}
          <Typography variant="body2">{post.body}</Typography>
        </CardContent>
      </Card>
    </Paper>
  );
}

export default PostItemLarge;
