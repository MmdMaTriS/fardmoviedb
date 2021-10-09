import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import App from "./App";
import "./App.scss";
import PageLayOut from "./components/Layout/PageLayOut";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <PageLayOut>
      <App />
    </PageLayOut>
  </BrowserRouter>,
  document.getElementById("root")
);
