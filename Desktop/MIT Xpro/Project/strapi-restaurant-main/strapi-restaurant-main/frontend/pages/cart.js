
import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Cart from "../components/cart";
function CartPage () {
      // get app context
  const appContext = useContext(AppContext);
  // isAuthenticated is passed to the cart component to display order button
  const { isAuthenticated } = appContext;

    return (
      <div>
        <Cart />
      </div>
    )
}

export default CartPage;