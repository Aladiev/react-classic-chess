import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NavigationMenu } from "./components/navigationMenu/index.tsx";
import Board from "./components/board/Board.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <NavigationMenu />
      <Board />
    </React.StrictMode>
    ,
  </Provider>
);
