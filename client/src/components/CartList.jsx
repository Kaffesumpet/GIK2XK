/* eslint-disable react/prop-types */
import CartDrawer from "./CartDrawer";
import { getAll } from "../services/CartService";
import { useEffect, useState } from "react";

function CartList({ pathname }) {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    getAll().then((carts) => {
      setCarts(carts);
    });
  }, [pathname]);

  return (
    <ul>
      {carts?.length > 0 ? (
        carts.map((cart) => (
          <li key={`carts_${cart.cartId}`}>
            <CartDrawer cart={cart} />
          </li>
        ))
      ) : (
        <h3>Could not fetch cart </h3>
      )}
    </ul>
  );
}

export default CartList;

/** Används ej, hade säkert kunna återanvänts i adminsyfte att se alla beställningar.
 */
