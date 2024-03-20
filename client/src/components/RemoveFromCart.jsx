import { Button, Typography } from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { removeFromCart } from "../services/ProductService";
import { useState } from "react";
import { useDummyAccount } from "../contexts/DummyAccountContext";

function RemoveFromCart({ productId, onProductRemoved }) {
  const [isRemoving, setIsRemoving] = useState(false);
  const [error, setError] = useState(null);
  const { getUserId } = useDummyAccount(); 

  const handleRemoveProduct = async () => {
    setIsRemoving(true);
    setError(null);

    const userId = getUserId();

    try {
      await removeFromCart(userId, productId);
      if (onProductRemoved) {
        onProductRemoved(productId);
      }
    } catch (error) {
      setError("Could not remove product from cart");
    } finally {
      setIsRemoving(false);
    }
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      startIcon={<RemoveShoppingCartIcon />}
      onClick={() => {
        handleRemoveProduct().then(() => {
          window.location.reload();
        });
      }}
      disabled={isRemoving}
      sx={{
        bgcolor: "#f44336",
        padding: ".5rem 1rem",
        "&:hover": {
          bgcolor: "#b71c1c",
        },
        boxShadow: 3,
      }}
    >
      <Typography variant="body2" component="span">
        {isRemoving ? "Removing..." : "Remove"}
      </Typography>
    </Button>
  );
}

export default RemoveFromCart;

/** Kopia av AddToCart, det var inte ett krav i minimum req så får det se ut såhär
 * Som jag återkommande går tillbaka till, hade cart suttit i context istället så hade jag nog satt en ta bort funktion till CartDrawer
 */
