import React from "react";
import { Row, Col, Card, Tag } from "antd";
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
              <ul>
                {Object.keys(dados.form_values).map((key) => {
                  return (
                    <li key={key}>
                      {key}:{JSON.stringify(dados.form_values[key])}
                    </li>
                  );
                })}
              </ul>
            </Col>
          </PerfectScrollbar>
        </Row>
      </Card>
    </>
  );
};

export default CardDetails;
