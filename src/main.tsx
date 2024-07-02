import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.tsx";
import Board from "./screens/board/Board.tsx";
import { NavigationMenu } from "./screens/navigationMenu/index.tsx";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <NavigationMenu />
      <Board />
    </React.StrictMode>
    ,
  </Provider>
);
