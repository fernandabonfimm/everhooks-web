import React from "react";
import HeaderDocumentation from "../../../components/HeaderDocumentation";
import FooterComponent from "../../../components/Footer";
import { Layout, Row, Col, BackTop, Breadcrumb } from "antd";
import "../../../styles/pages/documentation.css";
import { IoIosArrowUp } from "react-icons/io";
import SiderComponent from "../../../components/Sider";
import { useNavigate } from "react-router-dom";
import { IoLogoNodejs, IoMdBook } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import designer from "../../../designer.png";
import cameraman from "../../../cameraman.png";
import SiderResponsive from "../../../components/SiderResponsive";
const { Content } = Layout;

const About = () => {
  const navigate = useNavigate();
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
                    <Breadcrumb.Item onClick={() => navigate("/about")}>
                      <IoMdBook className="icon-breadcrumb" />
                      <span>Sobre</span>
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
                <Col xs={24} xl={24}>
                  <div className="padding-card">
                    <Row gutter={[32, 22]}>
                      <Col xs={24} xl={24}>
                        <h2 className="title-purple-documentation">
                          Sobre o Everhooks.com
                        </h2>
                      </Col>
                      <Col xs={24} xl={16}>
                        <p className="explict-code">
                          Com o{" "}
                          <a
                            className="link-text"
                            onClick={() => navigate("/")}
                          >
                            Everhooks.com
                          </a>
                          , você obtém instantaneamente um URL. Tudo o que é
                          enviado para esses endereços é mostrado
                          instantaneamente. Com isso, você pode testar e depurar
                          <span className="select-text">
                            Webhooks e solicitações HTTP
                          </span>
                          , bem como criar seus próprios fluxos de trabalho
                          usando o editor gráfico de ações Personalizadas ou
                          WebhookScript, uma linguagem de script simples, para
                          transformar, validar e processar solicitações HTTP de
                          várias maneiras – sem configurar e manter sua{" "}
                          <span className="select-text">
                            própria infra-estrutura.
                          </span>
                        </p>
                      </Col>
                      <Col xs={24} xl={8}>
                        <img src={designer} className="img-desginer" />
                      </Col>
                      <Col xs={24} xl={24} style={{ marginTop: 30 }}>
                        <p className="title-purple-documentation">
                          Para que as pessoas estão usando?
                        </p>
                      </Col>
                      <Col xs={24} xl={16}>
                        <ul>
                          <li>
                            Receba Everhooks sem precisar de um servidor Web
                            voltado para a Internet
                          </li>
                          <li>
                            Use o Everhooks.com como intermediário, fazendo
                            proxy de solicitações e podendo ver o que foi
                            enviado no passado
                          </li>
                          <li></li>
                        </ul>
                      </Col>
                      <Col xs={24} xl={8}>
                        <img src={cameraman} className="img-desginer" />
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
export default About;
