import React from "react";
import HeaderDocumentation from "../../../components/HeaderDocumentation";
import FooterComponent from "../../../components/Footer";
import { Layout, Row, Col, Card, Breadcrumb } from "antd";
import "../../../styles/pages/documentation.css";
import SiderComponent from "../../../components/Sider";
import { useNavigate } from "react-router-dom";
import { IoLogoNodejs, IoMdBook } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import aboutPng from "../../../buscandoArquivosLupa.png";

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
                  <Card className="card-documentation">
                    <Row gutter={[32, 22]}>
                      <Col xs={24} xl={24}>
                        <h2 className="title-purple-documentation">
                          Sobre o Everhooks.com
                        </h2>
                      </Col>
                      <Col xs={24} xl={24}>
                        <p className="explict-code">
                          Com o Everhooks.com, você obtém instantaneamente um
                          URL e um endereço de e-mail únicos e aleatórios. Tudo
                          o que é enviado para esses endereços é mostrado
                          instantaneamente. Com isso, você pode testar e depurar
                          Webhooks e solicitações HTTP, bem como criar seus
                          próprios fluxos de trabalho usando o editor gráfico de
                          Ações Personalizadas ou WebhookScript, uma linguagem
                          de script simples, para transformar, validar e
                          processar solicitações HTTP de várias maneiras – sem
                          configurar e manter sua própria infra-estrutura.
                        </p>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
        <FooterComponent />
      </Layout>
    </>
  );
};
export default About;
