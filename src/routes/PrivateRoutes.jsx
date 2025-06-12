import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import FormPost from "../pages/Post/FormPost";

const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/form" element={<FormPost />} />
      </Routes>
    </BrowserRouter>
  );
};
export default PrivateRoutes;
