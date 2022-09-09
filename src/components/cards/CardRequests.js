import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/pages/home.css";
import moment from "moment";
import { Row, Col, Card, Input, Tag, Button } from "antd";
import "react-perfect-scrollbar/dist/css/styles.css";
import { getUuid, getFirstId, deleteUuid } from "../../services/apiUuid";
import Alert from "sweetalert2";

import PerfectScrollbar from "react-perfect-scrollbar";

const CardRequests = () => {
  const [search, setSearch] = useState("");
  const [uuidList, setUuidList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      (async () => {
        const _data = await getUuid();
        const { data } = await getFirstId(_data);
        setUuidList(data);
      })();
    }, 3000); // 300000
    return () => clearInterval(interval);
  }, []);

  const onDelete = async function (ind) {
    console.log(uuidList[ind - 1].id);
    try {
      const _resultConfirm = await Alert.fire({
        title: "Atenção",
        text: "Você realmente deseja excluir essa requisão?",
        confirmButtonText: "Excluir",
        confirmButtonColor: "red",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        reverseButtons: true,
      });

      if (_resultConfirm.isConfirmed) {
        await deleteUuid(uuidList[ind - 1].id);
        window.location.reload();
      }
    } catch (error) {
      await Alert.fire(error?.response?.message);
    }
  };

  const goToDetails = async function (ind) {
    const list = uuidList[ind - 1];
    navigate("/details", { state: { list } });
  };

  return (
    <>
      <Card className="card-home">
        <Row gutter={[32, 22]}>
          <Col xs={24} xl={24}>
            <span className="titlegray">Requisições</span>
          </Col>
          <Row gutter={[32, 22]}>
            {" "}
            <PerfectScrollbar className="perfect-scroll">
              {" "}
              {uuidList
                .map((dados, index) => {
                  var _index = index + 1;
                  return (
                    <Col xs={24} xl={24} style={{ marginTop: 10 }} key={index}>
                      <Card
                        className="card-request"
                        onClick={() => goToDetails(_index)}
                      >
                        <Row gutter={[32, 22]}>
                          <Col xs={18} xl={18}>
                            <Row gutter={[32, 22]}>
                              <Col xs={24} xl={24}>
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
                              </Col>
                              <Col xs={24} xl={5} className="margintop-col">
                                <span className="white-description">
                                  #{_index}
                                </span>
                              </Col>
                              <Col xs={24} xl={12} className="margintop-col">
                                <span className="white-description">
                                  {moment(dados.created_at).format(
                                    "DD/MM/YYYY"
                                  )}
                                </span>
                              </Col>
                            </Row>
                          </Col>
                          <Col xs={6} xl={6}>
                            <Button
                              className="delete"
                              type="primary"
                              danger
                              onClick={() => onDelete(_index)}
                            >
                              X
                            </Button>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  );
                }).reverse()}
            </PerfectScrollbar>
          </Row>
        </Row>
      </Card>
    </>
  );
};
export default CardRequests;
