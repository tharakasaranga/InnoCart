import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import Home from "./components/Home";
import ProductCategory from "./components/ProductCategory";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/p" element={<ProductCategory />} />

    </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);