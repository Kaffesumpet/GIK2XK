import { Link, Outlet } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@mui/material";
import CartDrawer from "./components/CartDrawer";
import { DummyAccountProvider } from "./contexts/DummyAccountContext";
import DummyAccountButton from "./components/DummyAccountButton";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    text: {
      primary: "#ffffff", // Set primary text color to white
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <DummyAccountProvider>
          <Box component="header" sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar style={{ background: "#274661" }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <Link to="/">Store</Link>
                </Typography>
                <Button variant="contained" sx={{ color: "white", mr: 1, ml: 1 }}>
                  <Link to="/products/new">+Product</Link>
                </Button>
                <DummyAccountButton />
                <CartDrawer />
              </Toolbar>
            </AppBar>
          </Box>
          <Container sx={{ mt: 4 }} maxWidth="xl" component="main">
            <Outlet />
          </Container>
        </DummyAccountProvider>
      </ThemeProvider>
    </>
  );
}

/** Lite problem att få ner storlek vid sidan om man ska fylla baren med massa knappar, 
 *  En möjlig lösning är att skapa en knapp man trycker på för att få en pop-up med menyval
 *  En annan möjlighet är implementera flera navbarer
 */

export default App;
