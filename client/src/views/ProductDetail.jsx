import ProductItemLarge from "../components/ProductItemLarge";
import { Box, Button, Container, Paper } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById } from "../services/ProductService";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import EditIcon from "@mui/icons-material/Edit";
import { useTheme } from "@emotion/react";

//import { useNavigate } from "react-router-dom";

function ProductDetail() {
  const theme = useTheme();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const primaryTextColor = theme.palette.text.primary;

  useEffect(() => {
    getById(productId).then((product) => setProduct(product));
  }, [productId]);

  const navigate = useNavigate();

  return product ? (
    <Container style={{ color: primaryTextColor }}>
      <Paper
        elevation={3}
        sx={{ p: 2, mt: 4, borderRadius: 2 }}
        style={{
          background: "linear-gradient(120deg, #203a50, #1a3146)",
        }}
      >
        <ProductItemLarge product={product} />
        <Box display="flex" justifyContent="space-between" mb={4}>
          <Button
            variant="contained"
            startIcon={<ChevronLeftIcon />}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            onClick={() => navigate(`/products/${product.productId}/edit`)}
          >
            Edit
          </Button>
        </Box>
      </Paper>
    </Container>
  ) : (
    <h3>Could not fetch product</h3>
  );
}

export default ProductDetail;
