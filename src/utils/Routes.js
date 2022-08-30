import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Details from "../pages/details";

const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
};
export default RoutesComponent;
