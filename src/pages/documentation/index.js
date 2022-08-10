import React from "react";
import HeaderDocumentation from "../../components/HeaderDocumentation";
import FooterComponent from "../../components/Footer";
import { Layout, Row, Col, Card } from "antd";
import '../../styles/pages/documentation.css';
import SiderComponent from "../../components/Sider";

const {Content} = Layout;

const Documentation = () => {
    return (
        <>
        <Layout style={{ minHeight: "100vh" }}>
            <HeaderDocumentation/>
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
                                <h3>Hello Wordl!</h3>
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
export default Documentation;