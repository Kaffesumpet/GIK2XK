import { useState, useEffect } from "react";
import {
  Box,
  Drawer,
  Typography,
  List,
  Divider,
  ListItem,
  ListItemText,
  IconButton,
  Grid,
  useMediaQuery,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { getCart } from "../services/UserService";
import { useDummyAccount } from "../contexts/DummyAccountContext";
import { useTheme } from "@emotion/react";

function CartDrawer() {
  const [open, setOpen] = useState(false);
  const [userCart, setUserCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { getUserId } = useDummyAccount();
  const isSmallScreen = useMediaQuery("(max-width: 500px)");
  const theme = useTheme();
  const primaryTextColor = theme.palette.text.primary;

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userId = getUserId();
        const cartData = await getCart(userId);
        console.log(cartData);
        if (cartData) {
          setUserCart(cartData.products);
          setTotalPrice(cartData.totalPrice);
        } else {
          setUserCart([]);
          setTotalPrice(0);
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, [getUserId]);

  let drawerWidth;
  if (isSmallScreen) {
    drawerWidth = "100vw";
  } else {
    drawerWidth = `max(33vw, 300px)`;
  }

  const DrawerList = (
    <Box sx={{ width: drawerWidth, pl: 1 }}>
      <IconButton onClick={() => setOpen(false)}>
        <CloseIcon />
      </IconButton>
      <Typography variant="h5" align="center" gutterBottom>
        User {getUserId()}&apos;s Cart {}
      </Typography>
      <Divider />
      <List>
        {userCart.map((cartItem, index) => (
          <div key={index}>
            <ListItem disablePadding>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <img
                    src={cartItem.imageUrl}
                    alt={cartItem.title}
                    style={{ width: "120px", height: "auto" }}
                  />
                </Grid>
                <Grid item xs>
                  <ListItemText primary={`${cartItem.title}`} />
                  <ListItemText
                    secondary={`${cartItem.amount} unit(s) for a total of  ${cartItem.price} :-`}
                    secondaryTypographyProps={{ style: { color: primaryTextColor } }}
                  />
                </Grid>
              </Grid>
            </ListItem>
            {index !== userCart.length - 1 && <Divider variant="middle" />}
          </div>
        ))}
      </List>
      <Divider />
      <ListItem disablePadding>
        <ListItemText primary={`Total Price: ${totalPrice}`} />
      </ListItem>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton onClick={() => setOpen(true)} color="inherit">
        <ShoppingCartIcon />
        <Typography variant="h6" component="div" sx={{ ml: 1 }}>
          Cart
        </Typography>
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            background: "linear-gradient(120deg, #203a50, #1a3146)",
          }, 
        }}
      >
        {DrawerList}
      </Drawer>
    </Box>
  );
}

export default CartDrawer;

/** useEffect fetchCart hade inte behövts om Cart innehållet finns innunti en kontext istället.
 */
