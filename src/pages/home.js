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
import { getUuid } from "../services/apiUuid";
import copy from "copy-to-clipboard";

const { Content } = Layout;

const Home = () => {
  const navigate = useNavigate();

  const [sendUUID, setSendUUID] = useState([]);

  useEffect(() => {
    (async () => {
      const _data = await getUuid();
      setSendUUID(_data);
      console.log("", _data);
    })();
  }, []);

  const copyToClipboard = () => {
    copy(`https://neweverhook.herokuapp.com/ever/${sendUUID}`);
  };

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
                        <h3 className="input-https" name="https">
                          https://neweverhook.herokuapp.com/ever/{sendUUID}
                        </h3>
                      </Col>
                      <Col xs={24} xl={4}>
                        <Button className="tag-copy" onClick={copyToClipboard}>
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
                          href="https://api.whatsapp.com/send?phone=+5511994979707&text=Ol%C3%A1!%20Preciso%20de%20suporte,%20pode%20me%20ajudar?"
                          target="_blank"
                        >
                          <MdHelpOutline style={{ marginRight: 10 }} />
                          Preciso de ajuda!
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24} xl={10}>
                    <img src={faq}  className="img-home" />
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
