import React from "react";
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import { Layout } from "antd";
import '../styles/pages/documentation.css';

const {Content} = Layout;

const Documentation = () => {
    return (
        <>
        <Layout style={{ minHeight: "100vh" }}>
            <NavbarComponent/>
            <Content className="content-home">

            </Content>
            <FooterComponent/>
        </Layout>
        </>
    )
}
export default Documentation;