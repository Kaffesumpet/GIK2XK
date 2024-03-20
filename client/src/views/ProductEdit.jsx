/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { create, getById, remove, update } from "../services/ProductService";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { useTheme } from "@emotion/react";

function ProductEdit() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const emptyProduct = {
    productId: 0,
    title: "",
    description: "",
    price: "",
    imageUrl: "",
  };
  const [product, setProduct] = useState(emptyProduct);
  const theme = useTheme();
  const primaryTextColor = theme.palette.text.primary;

  useEffect(() => {
    if (productId) {
      getById(productId).then((product) => setProduct(product));
    } else {
      setProduct(emptyProduct);
    }
  }, [productId]);

  function onChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    const newProduct = { ...product, [name]: value };
    setProduct(newProduct);
  }

  function onSave() {
    if (product.productId === 0) {
      create(product).then((response) => {
        navigate("/", { replace: true, state: response });
      });
    } else {
      update(product).then((response) =>
        navigate(`/products/${product.productId}`, {
          replace: true,
          state: response,
        })
      );
    }
  }

  function onDelete() {
    remove(product.productId).then((response) =>
      navigate("/", { replace: true, state: response })
    );
  }

  return (
    <Container maxWidth="lg" style={{ color: primaryTextColor }}>
      <Paper
        elevation={3}
        sx={{ p: 2, mt: 4, borderRadius: 2 }}
        style={{
          background: "linear-gradient(120deg, #203a50, #1a3146)",
        }}
      >
        <Typography variant="h4" component="h2">
          {product.productId ? "Edit Product" : "Create Product"}
        </Typography>
        <Box mt={3}>
          <form>
            <Box>
              <TextField
                fullWidth
                margin="normal"
                onChange={onChange}
                value={product.title}
                name="title"
                id="title"
                label="title"
                InputLabelProps={{
                  style: { color: "#fff" }, // White label
                }}
                InputProps={{
                  style: { color: "#fff", borderColor: "#fff" }, // White outline
                }}
              />
            </Box>
            <Box>
              <TextField
                fullWidth
                margin="normal"
                onChange={onChange}
                value={product.description}
                multiline
                minRows={5}
                name="description"
                id="description"
                label="description"
                InputLabelProps={{
                  style: { color: "#fff" }, // White label
                }}
                InputProps={{
                  style: { color: "#fff", borderColor: "#fff" }, // White outline
                }}
              />
            </Box>
            <Box>
              <TextField
                fullWidth
                margin="normal"
                onChange={onChange}
                value={product.price}
                name="price"
                id="price"
                label="price"
                InputLabelProps={{
                  style: { color: "#fff" }, // White label
                }}
                InputProps={{
                  style: { color: "#fff", borderColor: "#fff" }, // White outline
                }}
              />
            </Box>
            <Box>
              <TextField
                fullWidth
                margin="normal"
                onChange={onChange}
                value={product.imageUrl}
                name="imageUrl"
                id="imageUrl"
                label="imageUrl"
                InputLabelProps={{
                  style: { color: "#fff" }, // White label
                }}
                InputProps={{
                  style: { color: "#fff", borderColor: "#fff" }, // White outline
                }}
              />
            </Box>
            <Box display={"flex"}>
              <Box flexGrow={1}>
                <Button
                  startIcon={<ChevronLeftIcon />}
                  sx={{ mr: 1 }}
                  variant="contained"
                  onClick={() => navigate(-1)}
                >
                  Back
                </Button>
                {productId && (
                  <Button
                    startIcon={<DeleteIcon />}
                    onClick={onDelete}
                    variant="contained"
                    color="error"
                  >
                    Delete
                  </Button>
                )}
              </Box>
              <Button
                startIcon={<SaveIcon />}
                onClick={onSave}
                variant="contained"
                color="success"
              >
                Save
              </Button>
            </Box>
          </form>
        </Box>
      </Paper>
    </Container>
  );
}

export default ProductEdit;
