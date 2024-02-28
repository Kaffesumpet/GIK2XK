import { Avatar, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function UserItemSmall(props) {
  const { user } = props;
  return (
    <>
      <Link to={`/users/${user.id}/posts`}>
        <Box
          sx={{ maxWidth: '10rem' }}
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          gap=".7rem"
          {...props}>
          <Avatar alt={`Bild på ${user.username}`} src={user.imageUrl} />
          <Typography variant="h6" component="p">
            {user.username}
          </Typography>
        </Box>
      </Link>
    </>
  );
}

export default UserItemSmall;
