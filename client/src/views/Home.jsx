import ProductList from "../components/ProductList";
import { Grid, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Home() {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid
        background-color="1f3b53"
        container
        spacing={8}
        style={{
          minWidth: isScreenSmall ? "100%" : theme.breakpoints.values.md,
        }}
      >
        <Grid
          component="section"
          item
          xs={12}
          md={8}
          style={{
            minWidth: isScreenSmall ? "100%" : theme.breakpoints.values.md,
          }}
        >
          <Paper
            elevation={3}
            sx={{ p: 2, mt: 4, borderRadius: 2 }}
            style={{
              background: "linear-gradient(120deg, #203a50, #1a3146)",
            }}
          >
            <Typography variant="h2">New Releases</Typography>
            <ProductList />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
    </>
  );
}

export default Home;
