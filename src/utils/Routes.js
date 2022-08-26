import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Details from "../pages/details";
import Documentation from "../pages/documentation/index";
import About from "../pages/documentation/pages/about";
import Faq from "../pages/documentation/pages/faq";
import { getUuid } from "../services/apiUuid";

const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/details" element={<Details />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </>
  );
};
export default RoutesComponent;
