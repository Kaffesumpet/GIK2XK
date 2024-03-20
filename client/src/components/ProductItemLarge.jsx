/* eslint-disable react/prop-types */
import DetailedRating from "./DetailedRating";
import AddToCart from "./AddToCart";
import RemoveFromCart from "./RemoveFromCart";
import RatingHandler from "./RatingHandler";
import { Box, Divider, Grid, Typography } from "@mui/material";

function ProductItemLarge({ product }) {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {product.title}
      </Typography>
      <img
        src={product.imageUrl}
        alt="Product"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <DetailedRating ratings={product.ratings} />
      <Divider sx={{ my: 2, borderColor: "rgba(0, 0, 0, 0.12)" }} />
      <Typography variant="body1">Price: {product.price}</Typography>
      <RatingHandler productId={product.productId} />
      <Grid container spacing={2} justify="center">
        <Grid item>
          <AddToCart productId={product.productId} />
        </Grid>
        <Grid item>
          <RemoveFromCart productId={product.productId} />
        </Grid>
      </Grid>
      <Divider sx={{ my: 2, borderColor: "rgba(0, 0, 0, 0.12)" }} />
      <Typography variant="h6" gutterBottom>
        ABOUT THIS PRODUCT
      </Typography>
      <Typography variant="body1" gutterBottom>
        {product.description}
      </Typography>
      <Divider sx={{ my: 3, borderColor: "rgba(0, 0, 0, 0.12)" }} />
    </Box>
  );
}

export default ProductItemLarge;
