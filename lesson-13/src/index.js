import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./Header";
import LowHeader from "./LowHeader";
import MainCreations from "./MainCreations";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header></Header>
    <LowHeader></LowHeader>
    <MainCreations></MainCreations>
    <Footer></Footer>
  </React.StrictMode>
);

reportWebVitals();
