import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import { store } from "../widgets/chess";
import { NavigationMenu } from "../pages/navigationMenu";
import { ChessGame } from "../pages/chess";
import { ProfilePage } from "../pages/profile";


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
