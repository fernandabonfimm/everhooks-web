import React, { useEffect, useState } from "react";
import api from "../services/Api.js";
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import { Layout, Row, Col, Card, Input, Tag, Button, Divider } from "antd";
import "../styles/pages/home.css";
import { MdFileCopy, MdOutlineHelp } from "react-icons/md";
import platformeverhooks from "../platform-everhooks.png";
import platformevermart from "../platform-evermart.png";
import platformapi from "../platform-api.png";
import faq from "../faq.png";
import { useNavigate } from "react-router-dom";
import CardRequests from "../components/CardRequests";

const { Content } = Layout;

const Home = () => {
  const [data, setData] = useState(null);
  const [https, setHttps] = useState("https://everhooks.site/uuidgenerate");

  const navigate = useNavigate();

  useEffect(() => {
    api.get("api").then((res) => {
      console.log(res.data);
      const dado = res.data.message;
      setData(String(dado));
    });
  }, []);

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <NavbarComponent />
        <Content className="content-home">
          <Row gutter={[32, 22]}>
            <Col xs={8} xl={8}>
              <CardRequests />
            </Col>
            <Col xs={16} xl={16}>
              <Card className="card-home">
                <Row gutter={[32, 22]}>
                  <Col xs={24} xl={24}>
                    <h3>
                      Como utilizar o <a target="_blank">EverHooks</a> ?
                    </h3>
                  </Col>
                  <Col xs={24} xl={24}>
                    <Row gutter={[32, 22]}>
                      <Col xs={14} xl={14}>
                        <Row gutter={[32, 22]} style={{ marginTop: 70 }}>
                          <Col xs={4} xl={4}>
                            <Tag className="pass-tag">1°</Tag>
                          </Col>
                          <Col xs={20} xl={20}>
                            <h4>Passo</h4>
                          </Col>
                          <Col xs={24} xl={24}>
                            <span>
                              Copiar a chave https disponibilizada no site da{" "}
                              <a target="_blank">Everhooks</a>.
                            </span>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={10} xl={10}>
                        <img src={platformeverhooks} width={200} />
                      </Col>
                      <Divider />
                    </Row>
                  </Col>
                  <Col xs={24} xl={24}>
                    <Row gutter={[32, 22]}>
                      <Col xs={14} xl={14}>
                        <Row gutter={[32, 22]} style={{ marginTop: 70 }}>
                          <Col xs={4} xl={4}>
                            <Tag className="pass-tag">2°</Tag>
                          </Col>
                          <Col xs={20} xl={20}>
                            <h4>Passo</h4>
                          </Col>
                          <Col xs={24} xl={24}>
                            <Row gutter={[32, 22]}>
                              <Col xs={24} xl={24}>
                                <span>
                                  Inserir a chave https na plataforma
                                  <a
                                    href="https://qa-dashboard.mycheckout.com.br/login"
                                    target="_blank"
                                  >
                                    Evermart
                                  </a>
                                  em:
                                </span>
                              </Col>
                              <Col xs={24} xl={24}>
                                <span>
                                  {" "}
                                  Integrações {">"} Webhooks {">"} Adicionar
                                </span>
                              </Col>
                              <Col xs={24} xl={24}>
                                <Button></Button>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={10} xl={10}>
                        <img src={platformevermart} width={200} />
                      </Col>
                      <Divider />
                    </Row>
                  </Col>
                  <Col xs={24} xl={24}>
                    <Row gutter={[32, 22]}>
                      <Col xs={14} xl={14}>
                        <Row gutter={[32, 22]} style={{ marginTop: 70 }}>
                          <Col xs={4} xl={4}>
                            <Tag className="pass-tag">3°</Tag>
                          </Col>
                          <Col xs={20} xl={20}>
                            <h4>Passo</h4>
                          </Col>
                          <Col xs={24} xl={24}>
                            <span>
                              Inserir a chave https e a URL Encoded, gerada na
                              plataforma
                              <a
                                href="https://qa-dashboard.mycheckout.com.br/login"
                                target="_blank"
                              >
                                Evermart
                              </a>
                              , no Software de Teste de Api’s desejado.
                            </span>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={10} xl={10}>
                        <img src={platformapi} width={250} />
                      </Col>
                      <Divider />
                    </Row>
                  </Col>
                  <Col xs={24} xl={24}>
                    <Row gutter={[32, 22]}>
                      <Col xs={24} xl={24}>
                        <h4>
                          Sua URL exclusiva (copie-o daqui, não da barra de
                          endereço!)
                        </h4>
                      </Col>
                      <Col xs={20} xl={20}>
                        <Input value={https} className="input-https" />
                      </Col>
                      <Col xs={4} xl={4}>
                        <Tag className="tag-copy">
                          <MdFileCopy />
                        </Tag>
                      </Col>
                      <Divider />
                    </Row>
                  </Col>
                  <Col xs={14} xl={14}>
                    <Row gutter={[32, 22]}>
                      <Col xs={24} xl={24}>
                        <span>
                          Você não está recebendo nada? Certifique-se de ter
                          copiado o URL acima, e não da barra de endereços do
                          navegador.
                        </span>
                      </Col>
                      <Col xs={24} xl={24}>
                        <span>
                          Precisa de ajuda para navegar na plataforma Evermart?
                          Não se preocupe, nós temos um FAQ!
                        </span>
                      </Col>
                      <Col xs={24} xl={24}>
                        <Button>
                          <MdOutlineHelp />
                          Preciso de ajuda!
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={10} xl={10}>
                    <img src={faq} width={230} />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Content>
        <FooterComponent />
      </Layout>
    </>
  );
};
export default Home;
