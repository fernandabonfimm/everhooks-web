import React, { useState } from "react";
import HeaderDocumentation from "../../../components/HeaderDocumentation";
import FooterComponent from "../../../components/Footer";
import { Layout, Row, Col, Card, Button, BackTop, Breadcrumb } from "antd";
import "../../../styles/pages/documentation.css";
import SiderComponent from "../../../components/Sider";
import { useNavigate } from "react-router-dom";
import { IoLogoNodejs } from "react-icons/io";
import { IoHomeOutline, IoHelpCircleOutline } from "react-icons/io5";
import { BsPlusLg, BsFillCircleFill } from "react-icons/bs";
import { CardFaq1False } from "./components/CardFaq1False";
import { CardFaq2False } from "./components/CardFaq2False";
import { CardFaq3False } from "./components/CardFaq3False";
import { GrSubtract } from "react-icons/gr";
import { IoIosArrowUp } from "react-icons/io";
import SiderResponsive from "../../../components/SiderResponsive";

const { Content } = Layout;

const Faq = () => {
  const navigate = useNavigate();
  const [showQuestion1, setShowQuestion1] = useState(false);
  const [showQuestion2, setShowQuestion2] = useState(false);
  const [showQuestion3, setShowQuestion3] = useState(false);

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <HeaderDocumentation />
        <Content className="content-home">
          <Row gutter={[32, 22]}>
            <Col xs={24} xl={5}>
              <SiderComponent />
            </Col>
            <Col xs={24} xl={19}>
              <Row gutter={[32, 22]}>
                <Col xs={24} xl={24}>
                  <SiderResponsive />
                  <Breadcrumb>
                    <Breadcrumb.Item onClick={() => navigate("/")}>
                      <IoHomeOutline />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => navigate("/documentation")}>
                      <IoLogoNodejs className="icon-breadcrumb" />
                      <span>Documentação</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <IoHelpCircleOutline className="icon-breadcrumb" />
                      <span>Perguntas Frequentes</span>
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
                <Col xs={24} xl={24}>
                  <div className="padding-card">
                    <Row gutter={[32, 22]}>
                      <Col xs={24} xl={24}>
                        <h2 className="title-purple-documentation">
                          Perguntas Frequentes
                        </h2>
                      </Col>
                      <Col xs={24} xl={24}>
                        {!showQuestion1 && (
                          <Card className="card-faq">
                            <Row gutter={[32, 22]}>
                              <Col xs={20} xl={22}>
                                <Row gutter={[22, 22]} className="margin">
                                  <Col xs={1} xl={2}>
                                    <BsFillCircleFill className="circle" />
                                  </Col>
                                  <Col xs={18} xl={22}>
                                    <h3 className="question">
                                      Como faço para utilizar o Everhooks?
                                    </h3>
                                  </Col>
                                </Row>
                              </Col>
                              <Col xs={2} xl={2}>
                                <Button
                                  className="icon-plus"
                                  onClick={() => setShowQuestion1(true)}
                                >
                                  <BsPlusLg />
                                </Button>
                              </Col>
                            </Row>
                          </Card>
                        )}
                        {showQuestion1 && (
                          <Card className="card-faq">
                            <Row gutter={[32, 22]}>
                              <Col xs={20} xl={22}>
                                <Row gutter={[22, 22]} className="margin">
                                  <Col xs={1} xl={2}>
                                    <BsFillCircleFill className="circle" />
                                  </Col>
                                  <Col xs={20} xl={22}>
                                    <h3 className="question">
                                      Como faço para utilizar o Everhooks?
                                    </h3>
                                  </Col>
                                </Row>
                              </Col>
                              <Col xs={2} xl={2}>
                                <Button
                                  className="icon-plus"
                                  onClick={() => setShowQuestion1(false)}
                                >
                                  {" "}
                                  <GrSubtract />
                                </Button>
                              </Col>

                              <CardFaq1False />
                            </Row>
                          </Card>
                        )}
                      </Col>
                      <Col xs={24} xl={24}>
                        {!showQuestion2 && (
                          <Card className="card-faq">
                            <Row gutter={[32, 22]}>
                              <Col xs={20} xl={22}>
                                <Row gutter={[22, 22]} className="margin">
                                  <Col xs={1} xl={2}>
                                    <BsFillCircleFill className="circle" />
                                  </Col>
                                  <Col xs={20} xl={22}>
                                    <h3 className="question">
                                      Como faço para implantar na minha
                                      aplicação web o Everhooks?
                                    </h3>
                                  </Col>
                                </Row>
                              </Col>
                              <Col xs={2} xl={2}>
                                <Button
                                  className="icon-plus"
                                  onClick={() => setShowQuestion2(true)}
                                >
                                  <BsPlusLg />
                                </Button>
                              </Col>
                            </Row>
                          </Card>
                        )}
                        {showQuestion2 && (
                          <Card className="card-faq">
                            <Row gutter={[32, 22]}>
                              <Col xs={20} xl={22}>
                                <Row gutter={[22, 22]} className="margin">
                                  <Col xs={1} xl={2}>
                                    <BsFillCircleFill className="circle" />
                                  </Col>
                                  <Col xs={20} xl={22}>
                                    <h3 className="question">
                                      Meus dados são privados?
                                    </h3>
                                  </Col>
                                </Row>
                              </Col>
                              <Col xs={2} xl={2}>
                                <Button
                                  className="icon-plus"
                                  onClick={() => setShowQuestion2(false)}
                                >
                                  {" "}
                                  <GrSubtract />
                                </Button>
                              </Col>

                              <CardFaq2False />
                            </Row>
                          </Card>
                        )}
                      </Col>
                      <Col xs={24} xl={24}>
                        {!showQuestion3 && (
                          <Card className="card-faq">
                            <Row gutter={[32, 22]}>
                              <Col xs={20} xl={22}>
                                <Row gutter={[22, 22]} className="margin">
                                  <Col xs={1} xl={2}>
                                    <BsFillCircleFill className="circle" />
                                  </Col>
                                  <Col xs={20} xl={22}>
                                    <h3 className="question">
                                      Meus dados são privados?
                                    </h3>
                                  </Col>
                                </Row>
                              </Col>
                              <Col xs={2} xl={2}>
                                <Button
                                  className="icon-plus"
                                  onClick={() => setShowQuestion3(true)}
                                >
                                  <BsPlusLg />
                                </Button>
                              </Col>
                            </Row>
                          </Card>
                        )}
                        {showQuestion3 && (
                          <Card className="card-faq">
                            <Row gutter={[32, 22]}>
                              <Col xs={20} xl={22}>
                                <Row gutter={[22, 22]} className="margin">
                                  <Col xs={1} xl={2}>
                                    <BsFillCircleFill className="circle" />
                                  </Col>
                                  <Col xs={20} xl={22}>
                                    <h3 className="question">
                                      Meus dados são privados?
                                    </h3>
                                  </Col>
                                </Row>
                              </Col>
                              <Col xs={2} xl={2}>
                                <Button
                                  className="icon-plus"
                                  onClick={() => setShowQuestion3(false)}
                                >
                                  {" "}
                                  <GrSubtract />
                                </Button>
                              </Col>

                              <CardFaq3False />
                            </Row>
                          </Card>
                        )}
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
            <BackTop>
              <div className="backtop">
                <IoIosArrowUp />
              </div>
            </BackTop>
          </Row>
        </Content>
        <FooterComponent />
      </Layout>
    </>
  );
};
export default Faq;
