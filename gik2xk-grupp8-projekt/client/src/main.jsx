import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import PostEdit from './views/PostEdit.jsx';
import Posts from './views/Posts.jsx';
import PostDetail from './views/PostDetail.jsx';
import Home from './views/Home.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  blueGrey,
  deepPurple,
  green,
  grey,
  orange,
  purple,
  red,
  teal
} from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f3f3f3',
      paper: grey[50]
    },
    primary: {
      main: deepPurple[300]
    },
    secondary: {
      main: blueGrey[500]
    },
    success: {
      main: teal['700']
    },
    error: {
      main: red['700']
    }
  },
  typography: {
    fontFamily: '"Ubuntu", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: 'Satisfy',
      fontSize: '3.7rem'
    },
    h2: {
      fontSize: '2.1rem',
      marginBottom: '.7em',
      color: blueGrey[800]
    },
    h3: {
      fontSize: '1.6rem'
    },
    h4: {
      fontSize: '1.3rem',
      color: 'rgb(106, 77, 123)'
    },
    body1: { color: blueGrey[700] },
    body2: { color: blueGrey[800] }
  }
});
//Exempel alternativ mörkt tema. Byt ut till <ThemeProvider theme={darkTheme}> nedan för att testa.
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#18041A',
      paper: '#351338'
    },
    primary: {
      main: orange['A400']
    },
    secondary: {
      main: purple['A700']
    },
    success: { main: green['A400'] },
    error: {
      main: red['A400']
    }
  },
  typography: {
    fontFamily: '"Ubuntu", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: 'Satisfy, sans-serif',
      fontSize: '3.7rem',
      color: orange['A400']
    },
    h2: {
      fontSize: '2.1rem',
      marginBottom: '.7rem',
      color: grey[200]
    },
    h3: {
      fontSize: '1.6rem'
    },
    h4: {
      fontSize: '1.3rem',
      color: 'rgb(106,77,123)'
    },
    body1: { color: grey[50] },
    body2: { color: grey[200] }
  }
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/posts/:id/edit',
        element: <PostEdit />
      },
      {
        path: '/posts/:id',
        element: <PostDetail />
      },
      {
        path: '/posts/new',
        element: <PostEdit />
      },
      {
        path: '/users/:id/posts',
        element: <Posts />
      },
      {
        path: '/tags/:tag/posts',
        element: <Posts />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
