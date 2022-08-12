import React from "react";
import HeaderDocumentation from "../../../components/HeaderDocumentation";
import FooterComponent from "../../../components/Footer";
import { Layout, Row, Col, Card, Breadcrumb } from "antd";
import "../../../styles/pages/documentation.css";
import SiderComponent from "../../../components/Sider";
import { useNavigate } from "react-router-dom";
import { IoLogoNodejs, IoMdBook} from "react-icons/io";
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
                        <h2>Sobre o EverHook</h2>
                        <img src={aboutPng} width={200} />
                        <p>
                          Lorem Ipsum is simply, dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
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
