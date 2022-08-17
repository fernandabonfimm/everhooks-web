import React, { useState } from "react";
import HeaderDocumentation from "../../components/HeaderDocumentation";
import FooterComponent from "../../components/Footer";
import {
  Layout,
  Row,
  Col,
  Card,
  Breadcrumb,
  Modal,
  BackTop,
  Tag,
  Input,
} from "antd";
import "../../styles/pages/documentation.css";
import SiderComponent from "../../components/Sider";
import { useNavigate } from "react-router-dom";
import { IoLogoNodejs, IoIosArrowUp } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { BsFillCircleFill } from "react-icons/bs";
import { MdFileCopy } from "react-icons/md";
import Alert from "sweetalert2";
import SiderResponsive from "../../components/SiderResponsive";
import CodeDocumentation from "./pages/components/CodeDocumentation";

const { Content } = Layout;

const Documentation = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [https, setHttps] = useState(
    "curl https://everhooks.com/token/a2a6a4ae-4130-4063-953a-84fa29d81d43/requests"
  );
  const [code, setCode] = useState();

  function copiarHttps() {
    let httpsCopiada = document.getElementById("https");
    httpsCopiada.select();
    httpsCopiada.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }
  const showModal = () => {
    setVisible(true);
  };

  const openNotification = () => {
    Alert.fire({
      title: "Atenção",
      text: "Você confirma que leu todo o termo de uso da EverHooks?",
      confirmButtonText: "Confirmar",
      confirmButtonColor: "#57b1ef",
      showCancelButton: true,
      cancelButtonText: "Não",
      cancelButtonColor: "red",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setVisible(false);
      }
    });
  };

  return (
    <>
      <Modal
        title="Termos de Uso do Everhooks"
        visible={visible}
        onOk={openNotification}
      >
        <p>hello world</p>
      </Modal>
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
                  </Breadcrumb>
                </Col>
                <Col xs={24} xl={24}>
                  <div className="padding">
                    <Row gutter={[32, 22]}>
                      <Col xs={24} xl={24}>
                        <h2 className="title-purple-documentation">
                          Documentação API
                        </h2>
                      </Col>
                      <Col xs={24} xl={24}>
                        <p className="explict-code">
                          A API do Everhooks é pública, de uso gratuito, não
                          requer autenticação e é relativamente fácil de usar.
                        </p>
                      </Col>
                      <Col xs={24} xl={24}>
                        <Card title="Nota importante" className="terms of use">
                          <Row gutter={[32, 22]}>
                            <Col xs={2} xl={2}>
                              <BsFillCircleFill className="circle" />
                            </Col>
                            <Col xs={22} xl={22}>
                              <span className="description-card">
                                Observe que as diretrizes de uso justo e outras
                                limitações se aplicam conforme descrito pelo{" "}
                                <a className="terms-use" onClick={showModal}>
                                  Termos de Uso
                                </a>
                              </span>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                    <Row gutter={[32, 22]} style={{ marginTop: 60 }}>
                      <Col xs={24} xl={24}>
                        <h4 className="title-purple-documentation">
                          Uso Geral
                        </h4>
                      </Col>
                      <Col xs={24} xl={24}>
                        <span className="explict-code">
                          Base URL:{" "}
                          <a className="baseurl">https://everhooks.com</a>
                        </span>
                      </Col>
                      <Col xs={24} xl={24}>
                        <span className="explict-code">
                          Recomendamos que você defina os cabeçalhos,{" "}
                          <a className="baseurl">Accept </a>e
                          <a className="baseurl">Content-Type </a> como
                          <a className="baseurl">application/json </a>
                        </span>
                      </Col>
                    </Row>
                    <Row gutter={[32, 22]} style={{ marginTop: 60 }}>
                      <Col xs={24} xl={24}>
                        <h4 className="title-purple-documentation">
                          Usos comuns
                        </h4>
                      </Col>
                      <Col xs={24} xl={24}>
                        <span className="explict-code">
                          Para recuperar os dados que são enviados para uma URL
                          ou e-mail Webhook.site, convém usar o ponto de
                          extremidade Get Requests.
                        </span>
                      </Col>
                      <Col xs={24} xl={24}>
                        <span className="explict-code">
                          Por exemplo, com <a className="baseurl">cURL</a> ,
                          isso retorna as 50 solicitações mais recentes no
                          formato JSON.
                        </span>
                      </Col>
                      <Col xs={20} xl={20}>
                        <Input
                          name="https"
                          id="https"
                          value={https}
                          className="input-https"
                        />
                      </Col>
                      <Col xs={4} xl={4}>
                        <Tag className="tag-copy" onClick={copiarHttps}>
                          <MdFileCopy />
                        </Tag>
                      </Col>
                    </Row>
                    <Row gutter={[32, 22]} style={{ marginTop: 60 }}>
                      <Col xs={24} xl={24}>
                        <h4 className="title-purple-documentation">
                          Criar nova URL
                        </h4>
                      </Col>
                      <Col xs={24} xl={24}>
                        <span className="explict-code">
                          Na API do Everhooks.com, isso é chamado de token. Para
                          criar um novo programaticamente, você pode usar a API
                          assim:
                        </span>
                      </Col>
                      <Col xs={20} xl={20}>
                        <Input
                          name="https"
                          id="https"
                          value={https}
                          className="input-https"
                        />
                      </Col>
                      <Col xs={4} xl={4}>
                        <Tag className="tag-copy" onClick={copiarHttps}>
                          <MdFileCopy />
                        </Tag>
                      </Col>
                      <Col xs={24} xl={24}>
                        <span className="explict-code">
                          Isso retornará informações sobre o token no formato
                          JSON, incluindo seu UUID. Sua URL estará disponível no
                          endpoint
                          <a className="baseurl">
                            https://everhooks.com/[token uuid]
                          </a>
                        </span>
                      </Col>
                    </Row>
                    <CodeDocumentation />
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
export default Documentation;
