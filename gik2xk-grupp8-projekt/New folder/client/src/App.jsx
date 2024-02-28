import { Link, Outlet } from 'react-router-dom';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container
} from '@mui/material';

function App() {
  return (
    <>
      <Box component="header" sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">Blogg</Link>
            </Typography>
            <Button color="inherit">
              <Link to="/posts/new">Skapa inlägg</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Container sx={{ mt: 4 }} maxWidth="xl" component="main">
        <Outlet />
      </Container>
    </>
  );
}

export default App;
