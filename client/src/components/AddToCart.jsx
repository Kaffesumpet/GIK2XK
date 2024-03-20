/* eslint-disable react/prop-types */
import { Button, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { addToCart } from "../services/ProductService";
import { useState } from "react";
import { useDummyAccount } from "../contexts/DummyAccountContext"; // Import the useDummyAccount hook

function AddToCart({ productId, onProductAdded }) {
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState(null);
  const { getUserId } = useDummyAccount(); // Access getUserId from DummyAccount

  const handleAddProduct = async () => {
    setIsAdding(true);
    setError(null);

    const userId = getUserId(); // Get userId from DummyAccount

    try {
      await addToCart(userId, productId, 1);
      if (onProductAdded) {
        onProductAdded(productId);
      }
    } catch (error) {
      setError("Could not add product to cart");
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddShoppingCartIcon />}
      onClick={() => {
        handleAddProduct().then(() => {
          window.location.reload();
        });
      }}
      disabled={isAdding}
      sx={{
        bgcolor: "#4caf50",
        padding: ".5rem 1rem",
        "&:hover": {
          bgcolor: "#1b5e20",
        },
        boxShadow: 3,
      }}
    >
      <Typography variant="body2" component="span">
        {isAdding ? "Adding..." : "Buy"}
      </Typography>
    </Button>
  );
}

export default AddToCart;

/** Användningen är window.location.reload är ej önskvärd då att ladda om sidan varje gång kan orsaka problem. 
 *  Det är för att tecka upp bristen i att CartDrawer inte är dynamiskt. 
 *  Mina tankar om att fixa denna brist hade varit att skapa en kontext för Cart innehållet.
 * 
 *  Hade tid funnits över hade jag nog lekt med Virtualization här, varför rendera bilder som inte syns.
 */