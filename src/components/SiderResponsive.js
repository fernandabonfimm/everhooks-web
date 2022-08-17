import React, { useState } from "react";
import { Row, Col, Tag, Card } from "antd";
import { IoLogoNodejs, IoMdHelpCircleOutline, IoMdBook } from "react-icons/io";
import "../styles/components/sider-responsive.css";
import { useNavigate } from "react-router";

const SiderResponsive = () => {
    const navigate = useNavigate();
  return (
    <>
      <Card className="card-sider-responsive">
        <Row gutter={[8, 22]}>
          <Col xs={9} xl={9}>
            <Tag className="card-hover-responsive" onClick={() => navigate("/documentation")}>
              <Row justify="center">
                <IoLogoNodejs className="icon-responsive"/>
              </Row>
              <Row justify="center">
                <span className="description-responsive">API</span>
              </Row>
            </Tag>
          </Col>
          <Col xs={9} xl={9}>
            <Tag className="card-hover-responsive" onClick={() => navigate("/about")}>
              <Row justify="center">
                <IoMdBook className="icon-responsive"/>
              </Row>
              <Row justify="center">
                <span className="description-responsive">Sobre</span>
              </Row>
            </Tag>
          </Col>
          <Col xs={6} xl={6}>
            <Tag className="card-hover-responsive" onClick={() => navigate("/faq")}>
              <Row justify="center">
                <IoMdHelpCircleOutline className="icon-responsive" />
              </Row>
              <Row justify="center">
                <span className="description-responsive">FAQ</span>
              </Row>
            </Tag>
          </Col>
        </Row>
      </Card>
    </>
  );
};
export default SiderResponsive;
