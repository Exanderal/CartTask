import React, { FC, useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import theme from "./themes";
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";
import { CartContext } from "./context/CartContext";

const App: FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [productQuantity, setProductQuantity] = useState(1);

  return (
    <CartContext.Provider
      value={{ quantity, setQuantity, productQuantity, setProductQuantity }}
    >
      <ThemeProvider theme={theme}>
        <Router>
          <Route component={Cart} path="/" exact />
          <Route component={Checkout} path="/checkout" exact />
        </Router>
      </ThemeProvider>
    </CartContext.Provider>
  );
};

export default App;
