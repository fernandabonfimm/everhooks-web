import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Details from "../pages/details";
import Documentation from "../pages/documentation/index";
import About from "../pages/documentation/pages/about";
import Faq from "../pages/documentation/pages/faq";
import { getUuid } from "../services/routes/apiUuid";
import moment from "moment";

const RoutesComponent = () => {
  const [uuidGet, setUuidGet] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const _result = await getUuid();
      console.log(_result);
      if (_result?.response) {
        setUuidGet(
          _result?.data?.sort((a, b) => {
            if (a && b) {
              if (moment(a.createdAt).unix() < moment(b.createdAt).unix()) {
                return 1;
              }
              if (moment(a.createdAt).unix() > moment(b.createdAt).unix()) {
                return -1;
              }
            }
            return 0;
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Routes>
        <Route path="/:id" element={<Home />} id={uuidGet?.urluuid} />
        <Route path="/details/:id" element={<Details />} id={uuidGet?.urluuid} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </>
  );
};
export default RoutesComponent;
