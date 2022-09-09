import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Card, Button, Divider, Input, Tag } from "antd";
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import CardRequests from "../components/cards/CardRequests";
import { MdOutlineContentCopy } from "react-icons/md";
import "../styles/pages/details.css";
import { getUuid } from "../services/apiUuid";
import { useLocation } from "react-router-dom";
import moment from "moment";
import CardDetails from "../components/cards/CardDetails";

const { Content } = Layout;

const Details = () => {
  const location = useLocation();
  const dados = location.state.list;
  console.log(dados);

  const { TextArea } = Input;

  const [sendUUID, setSendUUID] = useState([]);

  useEffect(() => {
    (async () => {
      const _data = await getUuid();
      setSendUUID(_data);
      console.log("", _data);
    })();
  }, []);

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
            <Col xs={24} xl={10}>
              <Card className="card-home">
                <Row gutter={[32, 22]}>
                  <Col xs={24} xl={24}>
                    <Row gutter={[32, 22]}>
                      <Col xs={24} xl={24}>
                        <h3 className="purple-title">Datalhes da Requisição</h3>
                      </Col>
                      <Col xs={24} xl={24}>
                        <div style={{ overflowX: "auto" }}>
                          {" "}
                          <table className="table">
                            <thead>
                              <tr>
                                <th className="th">
                                  {dados.header.Type_Request === "post" ? (
                                    <Tag
                                      className="tag-post"
                                      style={{
                                        backgroundColor: "#9d85bd",
                                        border: "1px solid #7745ba",
                                        color: "#fff",
                                      }}
                                    >
                                      {dados.header.Type_Request}
                                    </Tag>
                                  ) : dados.header.Type_Request === "get" ? (
                                    <Tag
                                      className="tag-post"
                                      style={{
                                        backgroundColor: "#32cd32",
                                        border: "1px solid #00c800",
                                        color: "#fff",
                                      }}
                                    >
                                      {dados.header.Type_Request}
                                    </Tag>
                                  ) : dados.header.Type_Request === "delete" ? (
                                    <Tag
                                      className="tag-post"
                                      style={{
                                        backgroundColor: "#e33f32",
                                        border: "1px solid #ee0500",
                                        color: "#fff",
                                      }}
                                    >
                                      {dados.header.Type_Request}
                                    </Tag>
                                  ) : dados.header.Type_Request === "put" ? (
                                    <Tag
                                      className="tag-post"
                                      style={{
                                        backgroundColor: "#342bff",
                                        border: "1px solid #0900be",
                                        color: "#fff",
                                      }}
                                    >
                                      {dados.header.Type_Request}
                                    </Tag>
                                  ) : dados.header.Type_Request === "patch" ? (
                                    <Tag
                                      className="tag-post"
                                      style={{
                                        backgroundColor: "#ffff00",
                                        border: "1px solid #ffd700",
                                        color: "#fff",
                                      }}
                                    >
                                      {dados.header.Type_Request}
                                    </Tag>
                                  ) : dados.header.Type_Request === "copy" ? (
                                    <Tag
                                      className="tag-post"
                                      style={{
                                        backgroundColor: "#00ffff",
                                        border: "1px solid #00ced1",
                                        color: "#fff",
                                      }}
                                    >
                                      {dados.header.Type_Request}
                                    </Tag>
                                  ) : dados.header.Type_Request === "head" ? (
                                    <Tag
                                      className="tag-post"
                                      style={{
                                        backgroundColor: "#ff40ff",
                                        border: "1px solid #ff00ff",
                                        color: "#fff",
                                      }}
                                    >
                                      {dados.header.Type_Request}
                                    </Tag>
                                  ) : dados.header.Type_Request ? (
                                    <Tag
                                      className="tag-post"
                                      style={{
                                        backgroundColor: "#cdc6bd",
                                        border: "1px solid #d6cfc7",
                                        color: "#000",
                                      }}
                                    >
                                      {dados.header.Type_Request}
                                    </Tag>
                                  ) : null}
                                </th>
                                <th className="th">
                                  <span className="title-table">Data</span>
                                </th>
                                <th className="th">
                                  <span className="title-table">ID</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr role="row" className="odd">
                                <td className="td">
                                  <span className="description-table">
                                    https://neweverhook.herokuapp.com/ever/$
                                    {sendUUID}
                                  </span>
                                </td>
                                <td className="td">
                                  <span className="description-table">
                                    {moment(dados.created_at).format("lll")}
                                  </span>
                                </td>
                                <td className="td">
                                  <span className="description-table">
                                    {dados.id}
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </Col>
                      <Col xs={24} xl={24}>
                        <h3 className="purple-title">Cabeçalhos</h3>
                      </Col>
                      <Col xs={24} xl={24}>
                        <div style={{ overflowX: "auto" }}>
                          {" "}
                          <table className="table">
                            <thead>
                              <tr>
                                <th className="th">
                                  <span className="title-table">
                                    Postman-Token
                                  </span>
                                </th>
                                <th className="th">
                                  <span className="title-table">
                                    User-Agent
                                  </span>
                                </th>
                                <th className="th">
                                  <span className="title-table">
                                    Content-Type
                                  </span>
                                </th>
                                <th className="th">
                                  <span className="title-table">
                                    Connection
                                  </span>
                                </th>
                                <th className="th">
                                  <span className="title-table">
                                    Content-Length
                                  </span>
                                </th>
                                <th className="th">
                                  <span className="title-table">Data</span>
                                </th>
                                <th className="th">
                                  <span className="title-table">
                                    Accept-Encoding
                                  </span>
                                </th>
                                <th className="th">
                                  <span className="title-table">Accept</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr role="row" className="odd">
                                <td className="td">
                                  <span className="description-table">
                                    {dados.header["Postman-Token"]}
                                  </span>
                                </td>
                                <td className="td">
                                  <span className="description-table">
                                    {dados.header["User-Agent"]}
                                  </span>
                                </td>
                                <td className="td">
                                  <span className="description-table">
                                    {dados.header["Content-Type"]}
                                  </span>
                                </td>
                                <td className="td">
                                  <span className="description-table">
                                    {dados.header.Connection}
                                  </span>
                                </td>
                                <td className="td">
                                  <span className="description-table">
                                    {dados.header["Content-Length"]}
                                  </span>
                                </td>
                                <td className="td">
                                  <span className="description-table">
                                    {dados.header.date}
                                  </span>
                                </td>
                                <td className="td">
                                  <span className="description-table">
                                    {dados.header["Accept-Encoding"]}
                                  </span>
                                </td>
                                <td className="td">
                                  <span className="description-table">
                                    {dados.header.Accept}
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
                          value={JSON.stringify(dados.body)}
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
            <Col xs={24} xl={6}>
              <CardDetails />
            </Col>
          </Row>
        </Content>
        <FooterComponent />
      </Layout>
    </>
  );
};

export default Details;
