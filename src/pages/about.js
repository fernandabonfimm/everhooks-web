import React from "react";
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import { Layout, Row, Col, Card } from "antd";
import '../styles/pages/documentation.css';
import SiderComponent from "../../../components/Sider";

const {Content} = Layout;

const About = () => {
    return (
        <>
        <Layout style={{ minHeight: "100vh" }}>
            <NavbarComponent/>
            <Content className="content-home">
             <Row gutter={[32, 22]}>
                <Col xs={24} xl={8}>
                   <Card>
                    <SiderComponent/>
                   </Card>
                </Col>
                <Col xs={24} xl={16}>
                    <Card>
                        <Row gutter={[32, 22]}>
                            <Col xs={24} xl={24}>
                                    <h3>Sobre o Everhook</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </Col>
                        </Row>
                    </Card>
                </Col>
             </Row>
            </Content>
            <FooterComponent/>
        </Layout>
        </>
    )
}
export default About;