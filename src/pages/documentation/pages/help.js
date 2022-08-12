import React from "react";
import HeaderDocumentation from "../../../components/HeaderDocumentation";
import FooterComponent from "../../../components/Footer";
import { Layout, Row, Col, Card } from "antd";
import '../../../styles/pages/documentation.css';
import SiderComponent from "../../../components/Sider";
import 'antd/dist/antd.css';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { useNavigate } from "react-router-dom";
import { BsHeadphones, BsQuestionSquare } from 'react-icons/bs';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import helpWoman from "../../../sentadaMesa.png";

const {Content} = Layout;

const Help = () => {
    const navigate = useNavigate();
    return (
        <>
        <Layout style={{ minHeight: "100vh" }}>
            <HeaderDocumentation />
            <Content className="content-home">  
             <Row gutter={[32, 22]}>
                <Col xs={24} xl={24}>
                <Breadcrumb>
                        <Breadcrumb.Item onClick={() => navigate("/")}>
                            <HomeOutlined />
                        </Breadcrumb.Item>
                        <Breadcrumb.Item onClick={() => navigate("/documentation")}>
                            <HiOutlineDocumentText className="icon"/>
                            <span>Documentação</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item onClick={() => navigate("/about")}>
                            <AiOutlineInfoCircle className="icon"/>
                            <span>Sobre</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item onClick={() => navigate("/faq")}>
                            <BsQuestionSquare className="icon"/>
                            <span>Perguntas Frequentes</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item >
                            <BsHeadphones className="icon"/>
                            <span>Ajuda</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
                <Col xs={24} xl={5}>
                   <Card>
                    <SiderComponent/>
                   </Card>
                </Col>
                <Col xs={24} xl={16}>
                    <Card>
                        <Row gutter={[32, 22]}>
                            <Col xs={24} xl={24}>
                                    <h2>Ajuda</h2>
                                        <img src={helpWoman} width={200} />    
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
export default Help;