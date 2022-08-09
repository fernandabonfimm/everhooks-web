import React from "react";
import { Layout } from "antd";
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import '../styles/pages/details.css';

const { Content } = Layout;

const Details = () => {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <NavbarComponent />
        <Content className="content-home">
            
        </Content>
        <FooterComponent />
      </Layout>
    </>
  );
};
export default Details;
