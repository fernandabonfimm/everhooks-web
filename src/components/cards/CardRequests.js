import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/pages/home.css";
import moment from "moment";
import { MdOutlineSearch } from "react-icons/md";
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

  const goToDetails = async function (ind) {
    const list = uuidList[ind - 1];
    navigate('/details', { state: { list } });
  };

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

  return (
    <>
      <Card className="card-home">
        <Row gutter={[32, 22]}>
          <Col xs={24} xl={24}>
            <span className="titlegray">Requests</span>
          </Col>
          <Col xs={24} xl={24}>
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
              prefix={<MdOutlineSearch />}
            />
          </Col>
          <Row gutter={[32, 22]}>
            {" "}
            <PerfectScrollbar style={{ minHeight: "50vmin", maxHeight: "65vmax"}}>
              {" "}
              {uuidList.map((dados, index) => {
                var _index = index + 1;
                return (
                  <Col xs={24} xl={24} style={{marginTop: 10}} key={index}>
                    <Card
                      className="card-request"
                      onClick={() => goToDetails(_index)}
                    >
                      <Row gutter={[32, 22]}>
                        <Col xs={18} xl={18}>
                          <Row gutter={[32, 22]}>
                            <Col xs={24} xl={24}>
                              <Tag className="tag-post">
                                {dados.header.Type_Request}
                              </Tag>
                            </Col>
                            <Col xs={24} xl={5}>
                              <span className="white-description">
                                #{_index}
                              </span>
                            </Col>
                            <Col xs={24} xl={12}>
                              <span className="white-description">
                                {moment(dados.created_at).format("DD/MM/YYYY")}
                              </span>
                            </Col>
                            <Col xs={24} xl={4}>
                              <span className="white-description">
                                {moment(dados.created_at).format("hh:MM")}
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
              })}
            </PerfectScrollbar>
          </Row>
        </Row>
      </Card>
    </>
  );
};
export default CardRequests;