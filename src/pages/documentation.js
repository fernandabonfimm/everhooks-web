import React from "react";
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import { Layout, Row, Col, Card } from "antd";
import '../styles/pages/documentation.css';

const {Content} = Layout;

const Documentation = () => {
    return (
        <>
        <Layout style={{ minHeight: "100vh" }}>
            <NavbarComponent/>
            <Content className="content-home">
                <Row gutter={[32, 22]}>
                    <Col xs={24} xl={12}>
                        <Card><h3>Hello Wordl!</h3></Card>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Card><h3>Hello Wordl!</h3></Card>
                    </Col>
                </Row>
            </Content>
            <FooterComponent/>
        </Layout>
        </>
    )
}
export default Documentation;