import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import UserStore from "./store/UserStore";
import ProductStore from "./store/ProductStore";

export const Context = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      product: new ProductStore(),
    }}
  >
    <App />
  </Context.Provider>
);
