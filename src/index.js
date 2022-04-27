import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Providers from "./providers";
import GlobalStyles from "./style/resete-css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>
);
