import React, { useEffect, useState } from "react";
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import {
  Layout,
  Row,
  Col,
  Card,
  Input,
  Tag,
  Button,
  Divider,
  BackTop,
} from "antd";
import "../styles/pages/home.css";
import { MdFileCopy, MdHelpOutline } from "react-icons/md";
import platformeverhooks from "../platform-everhooks.png";
import platformevermart from "../platform-evermart.png";
import { IoIosArrowUp } from "react-icons/io";
import faq from "../faq.png";
import { useNavigate } from "react-router-dom";
import CardRequests from "../components/cards/CardRequests";
import moment from "moment";
import { getFirstId, getHttps, getUuid } from "../services/apiUuid";

const { Content } = Layout;

const Home = () => {
  const navigate = useNavigate();

  const [sendUUID, setSendUUID] = useState([]);

  function copiarHttps() {
    let textoCopiado = document.getElementById("https");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }

  useEffect(() => {
    (async () => {
      const _data = await getHttps();
      setSendUUID(_data);
      console.log("", _data);
    })();
  }, []);

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <NavbarComponent />
        <Content className="content-home">
          <Row gutter={[32, 22]}>
            <Col xs={24} xl={8}>
              <CardRequests />
            </Col>
            <Col xs={24} xl={16}>
              <Card className="card-home">
                <Row gutter={[32, 22]}>
                  <Col xs={24} xl={24}>
                    <h4 className="purple-titlehome">
                      Como utilizar o <a target="_blank">EverHooks</a> ?
                    </h4>
                  </Col>
                  <Col xs={24} xl={24}>
                    <Row gutter={[32, 22]}>
                      <Col xs={24} xl={14}>
                        <Row gutter={[32, 22]}>
                          <Col xs={4} xl={4}>
                            <Tag className="pass-tag">1°</Tag>
                          </Col>
                          <Col xs={20} xl={20}>
                            <span className="description-pass">Passo</span>
                          </Col>
                          <Col xs={24} xl={24}>
                            <span className="explication-pass">
                              Copiar a chave https disponibilizada no site da{" "}
                              <a target="_blank" className="link-pass">
                                Everhooks
                              </a>
                              .
                            </span>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24} xl={10}>
                        <img src={platformeverhooks} className="imgs-home" />
                      </Col>
                      <Col xs={20} xl={20}>
                        <Input
                          className="input-https"
                          name="https"
                          id="https"
                          value={sendUUID}
                          readOnly
                        ></Input>
                      </Col>
                      <Col xs={4} xl={4}>
                        <Button className="tag-copy" onClick={copiarHttps}>
                          <MdFileCopy />
                        </Button>
                      </Col>
                      <Divider className="white-divider" />
                    </Row>
                  </Col>
                  <Col xs={24} xl={24}>
                    <Row gutter={[32, 22]}>
                      <Col xs={24} xl={14}>
                        <Row gutter={[32, 22]}>
                          <Col xs={4} xl={4}>
                            <Tag className="pass-tag">2°</Tag>
                          </Col>
                          <Col xs={20} xl={20}>
                            <span className="description-pass">Passo</span>
                          </Col>
                          <Col xs={24} xl={24}>
                            <Row gutter={[8, 22]}>
                              <Col xs={24} xl={24}>
                                <span className="explication-pass">
                                  Inserir a chave https na plataforma
                                  <a
                                    href="https://qa-dashboard.mycheckout.com.br/integrations/webhooks/new"
                                    target="_blank"
                                    className="link-pass"
                                  >
                                    Evermart
                                  </a>
                                  em:
                                </span>
                              </Col>
                              <Col xs={24} xl={24}>
                                <span
                                  className="explication-pass-gray"
                                  href="https://qa-dashboard.mycheckout.com.br/integrations/webhooks/new"
                                >
                                  {" "}
                                  Integrações {">"} Webhooks {">"} Adicionar
                                </span>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24} xl={10}>
                        <img src={platformevermart} className="imgs-home" />
                      </Col>
                      <Divider className="white-divider" />
                    </Row>
                  </Col>
                  <Col xs={24} xl={14}>
                    <Row gutter={[32, 22]}>
                      <Col xs={22} xl={22}>
                        <span className="purple-description">
                          Você não está recebendo nada? Certifique-se de ter
                          copiado o URL acima, e não da barra de endereços do
                          navegador.
                        </span>
                      </Col>
                      <Col xs={22} xl={22}>
                        <span className="purple-description">
                          Precisa de ajuda para navegar na plataforma Evermart?
                          Não se preocupe, nós temos um FAQ!
                        </span>
                      </Col>
                      <Col xs={24} xl={24}>
                        <Button
                          className="btn-help"
                          onClick={() => navigate("/faq")}
                        >
                          <MdHelpOutline style={{ marginRight: 10 }} />
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
export default Home;
