import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home";
import Details from "../pages/details";
import Documentation from "../pages/documentation";
const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
    </>
  );
};
export default RoutesComponent;
