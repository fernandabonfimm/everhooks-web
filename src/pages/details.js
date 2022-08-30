import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Card, Button, Divider, Input, BackTop } from "antd";
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import CardRequests from "../components/cards/CardRequests";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import "../styles/pages/details.css";
import { getFirstId, getUuid, getById } from "../services/apiUuid";
import { useLocation } from "react-router-dom";

const { Content } = Layout;

const Details = () => {
  const location = useLocation();
  const dados = location.state.list;
  console.log(dados);

  const { TextArea } = Input;

  function copiarTexto() {
    let textoCopiado = document.getElementById("text");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }


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
                    <Row gutter={[32, 22]}>
                      <Col xs={24} xl={24}>
                        <h3 className="purple-title">Headers</h3>
                      </Col>
                      <Col xs={24} xl={24}>
                        <div style={{ overflowX: "auto" }}>
                          {" "}
                          <table className="table">
                            <thead>
                              <tr>
                                <th className="th">
                                  <span className="title-table">Host</span>
                                </th>
                                <th className="th">
                                  <span className="title-table">Uuid</span>
                                </th>
                                <th className="th">
                                  <span className="title-table">
                                    User-Agent
                                  </span>
                                </th>
                                <th className="th">
                                  <span className="title-table">Hora</span>
                                </th>
                                <th className="th">
                                  <span className="title-table">
                                    Connection
                                  </span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                                  <tr  role="row" className="odd">
                                    <td className="td">
                                      <span className="description-table">
                                        {dados.header.Host}
                                      </span>
                                    </td>
                                    <td className="td">
                                      <span className="description-table">
                                        {dados.header.uuid}
                                      </span>
                                    </td>
                                    <td className="td">
                                      <span className="description-table">
                                        {navigator.userAgent}
                                      </span>
                                    </td>
                                    <td className="td">
                                      <span className="description-table">
                                        {dados.header.date}
                                      </span>
                                    </td>
                                    <td className="td">
                                      <span className="description-table">
                                        {dados.header.Connection}
                                      </span>
                                    </td>
                                  </tr>   
                            </tbody>
                          </table>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Divider />
                  <Col xs={24} xl={24}>
                    <Row gutter={[32, 22]}>
                      <Col xs={24} xl={24}>
                        <h3 className="purple-title">Conteúdo Bruto</h3>
                      </Col>
                      <Col xs={24} xl={24}>
                        <TextArea
                          type="text"
                          name="text"
                          id="text"
                          showCount
                          maxLength={2000}
                          className="raw-content"
                          value={dados.body}
                          readOnly
                        />
                      </Col>
                    </Row>
                    <Row justify="end">
                      <Button
                        className="btn-copy"
                        style={{ marginTop: 15 }}
                        onClick={copiarTexto}
                      >
                        <MdOutlineContentCopy style={{ marginRight: 10 }} />
                        Copiar URL Enconded
                      </Button>
                    </Row>
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

export default Details;
