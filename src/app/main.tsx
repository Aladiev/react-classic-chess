import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import { store } from "../widgets/chess";
import { NavigationMenu } from "../paiges/navigationMenu";
import { ChessGame } from "../paiges/chess";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <NavigationMenu />
      <ChessGame />
    </React.StrictMode>
    ,
  </Provider>
);
