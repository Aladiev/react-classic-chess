import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import { store } from "../widgets/chess";
import { NavigationMenu } from "../paiges/navigationMenu";
import { ChessGame } from "../paiges/chess";
import { ProfilePage } from "../paiges/profile";


ReactDOM.createRoot(document.querySelector("#root")!).render(
  <Provider store={store}>
    <React.StrictMode>

      <BrowserRouter>
        <NavigationMenu />
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chess" element={<ChessGame />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
    ,
  </Provider>
);
