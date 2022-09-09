import React from "react";
import {Row, Col, Card, Tag } from "antd";
import "../../styles/pages/details.css";
import { useLocation } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";

const CardDetails = () => {
  const location = useLocation();
  const dados = location.state.list;
  console.log(dados);

  return (
    <>
      <Card className="card-home">
        <Row gutter={[32, 22]}>
          <Col xs={24} xl={24}>
            <h3 className="purple-title">Valores do Formulário</h3>
          </Col>
          <PerfectScrollbar className="perfect-scroll">
          <Col xs={24} xl={24}>
              <Row gutter={[32, 22]}>
                <Col xs={24} xl={12}>
                  <span className="request-divider-tag">oi </span>
                </Col>
                <Col xs={24} xl={12}>
                  <span className="request-divider">teste</span>
                </Col>
              </Row>
          </Col>
          </PerfectScrollbar>
        </Row>
      </Card>
    </>
  );
};

export default CardDetails;
