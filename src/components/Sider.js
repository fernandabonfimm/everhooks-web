import React, {useState} from "react";
import { Row, Col, Layout, Button } from "antd";
import { BsHeadphones, BsQuestionSquare } from 'react-icons/bs';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const { Sider } = Layout;

const SiderComponent = ({children}) => {
  return (
  <>
      <Row gutter={[32, 22]}>
      <Col xs={24} xl={24}>
         <Button className="button" href="../about">
          <AiOutlineInfoCircle className="icon"/>
          Sobre
          </Button>
        </Col>
        <Col xs={24} xl={24}>
         <Button className="button" href="../documentation">
          <HiOutlineDocumentText className="icon"/>
          Documentação API
          </Button>
        </Col>
        <Col xs={24} xl={24}>
          <Button className="button" href="../faq">
            <BsQuestionSquare className="icon"/>
            FAQ
          </Button>
        </Col>
        <Col xs={24} xl={24}>
         <Button className="button" href="../help">
          <BsHeadphones className="icon"/>
          Ajuda
         </Button>
        </Col>
      </Row>
    </>
  );
};

export default SiderComponent;
