import React from "react";
import { Layout, Row, Col, Card } from "antd";
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import CardRequests from "../components/CardRequests";
import "../styles/pages/details.css";

const { Content } = Layout;

const Details = () => {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <NavbarComponent />
        <Content className="content-home">
          <Row gutter={[32, 22]}>
            <Col xs={8} xl={8}>
              <CardRequests />
            </Col>
            <Col xs={8} xl={8}>
              <Card className="card-home"></Card>
            </Col>
          </Row>
        </Content>
        <FooterComponent />
      </Layout>
    </>
  );
};
export default Details;
