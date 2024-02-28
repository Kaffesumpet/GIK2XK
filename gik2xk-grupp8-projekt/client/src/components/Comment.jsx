import { Box, ListItem, ListItemText, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { toDateTimeString } from '../common/formatHelpers';

function Comment({ comment }) {
  return (
    <ListItem sx={{ mb: 1, borderBottom: `1px solid ${grey[300]}` }}>
      <ListItemText
        primary={
          <Typography
            color="text.secondary"
            component="p"
            fontWeight="bold"
            variant="body1">
            {comment.author} säger:
          </Typography>
        }
        secondary={
          <Box>
            <Typography variant="body2">
              {toDateTimeString(comment.createdAt)}
            </Typography>
            <Typography sx={{ my: 1 }} color="text.primary" variant="h4">
              {comment.title}
            </Typography>
            <Typography color="text.secondary" variant="body1">
              {comment.body}
            </Typography>
          </Box>
        }></ListItemText>
    </ListItem>
  );
}

export default Comment;
