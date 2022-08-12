import React, { useState } from "react";
import { Row, Col, Layout, Button } from "antd";
import { IoLogoNodejs, IoMdHelpCircleOutline, IoMdBook } from "react-icons/io";

const { Sider } = Layout;

const SiderComponent = ({ children }) => {
  return (
    <>
      <Row justify="center">
        <Button className="btn-sider" href="../documentation">
          <Row justify="center">
            <IoLogoNodejs className="icon-sider" />
          </Row>
          <Row justify="center">
            <span className="title-sider">Documentação API</span>
          </Row>
        </Button>
      </Row>
      <Row justify="center">
        <Button className="btn-sider" href="../about">
          <Row justify="center">
            <IoMdBook className="icon-sider" />
          </Row>
          <Row justify="center">
            <span className="title-sider">Sobre</span>
          </Row>
        </Button>
      </Row>
      <Row justify="center">
        <Button className="btn-sider" href="../faq">
          <Row justify="center">
            <IoMdHelpCircleOutline className="icon-sider" />
          </Row>
          <Row justify="center">
            <span className="title-sider">FAQ</span>
          </Row>
        </Button>
      </Row>
    </>
  );
};

export default SiderComponent;
