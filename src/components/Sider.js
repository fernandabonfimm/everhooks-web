import React, {useState} from "react";
import { Row, Col, Layout, Button } from "antd";
import {FaNodeJs, FaRegBellSlash} from 'react-icons/fa';

const { Sider } = Layout;

const SiderComponent = ({children}) => {
  return (
    <>
      <Row gutter={[32, 22]}>
      <Col xs={24} xl={24}>
         <Button className="button">
          <FaNodeJs/>
          Sobre
          </Button>
        </Col>
        <Col xs={24} xl={24}>
         <Button className="button">
          <FaNodeJs/>
          Documentação API
          </Button>
        </Col>
        <Col xs={24} xl={24}>
          <Button className="button">
            <FaNodeJs/>
            FAQ
          </Button>
        </Col>
        <Col xs={24} xl={24}>
         <Button className="button">
          <FaRegBellSlash/>
          Ajuda
         </Button>
        </Col>
      </Row>
    </>
  );
};

export default SiderComponent;
