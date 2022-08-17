import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Card, Layout, Button } from "antd";
import { IoLogoNodejs, IoMdHelpCircleOutline, IoMdBook } from "react-icons/io";

const { Sider } = Layout;

const SiderComponent = ({ children }) => {
  const navigate = useNavigate();
  return (
    <>
      <Card className="card-documentation-sider">
        <Row justify="center">
          <Button
            className="btn-sider"
            onClick={() => navigate("/documentation")}
          >
            <Row justify="center">
              <IoLogoNodejs className="icon-sider" />
            </Row>
            <Row justify="center">
              <span className="title-sider">Documentação API</span>
            </Row>
          </Button>
        </Row>
        <Row justify="center">
          <Button className="btn-sider" onClick={() => navigate("/about")}>
            <Row justify="center">
              <IoMdBook className="icon-sider" />
            </Row>
            <Row justify="center">
              <span className="title-sider">Sobre</span>
            </Row>
          </Button>
        </Row>
        <Row justify="center">
          <Button className="btn-sider" onClick={() => navigate("/faq")}>
            <Row justify="center">
              <IoMdHelpCircleOutline className="icon-sider" />
            </Row>
            <Row justify="center">
              <span className="title-sider">FAQ</span>
            </Row>
          </Button>
        </Row>
      </Card>
    </>
  );
};

export default SiderComponent;
