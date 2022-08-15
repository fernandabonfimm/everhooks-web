import React, { useState } from "react";
import HeaderDocumentation from "../../components/HeaderDocumentation";
import FooterComponent from "../../components/Footer";
import {
  Layout,
  Row,
  Col,
  Card,
  Breadcrumb,
  Modal,
  Button,
  Tag,
  Input,
} from "antd";
import "../../styles/pages/documentation.css";
import SiderComponent from "../../components/Sider";
import { useNavigate } from "react-router-dom";
import { IoLogoNodejs } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { BsFillCircleFill } from "react-icons/bs";
import { MdFileCopy } from "react-icons/md";
import Alert from "sweetalert2";

const { Content } = Layout;

const Documentation = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [https, setHttps] = useState(
    "curl https://everhooks.com/token/a2a6a4ae-4130-4063-953a-84fa29d81d43/requests"
  );

  function copiarHttps() {
    let httpsCopiada = document.getElementById("https");
    httpsCopiada.select();
    httpsCopiada.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }
  const showModal = () => {
    setVisible(true);
  };

  const openNotification = () => {
    Alert.fire({
      title: "Atenção",
      text: "Você confirma que leu todo o termo de uso da EverHooks?",
      confirmButtonText: "Confirmar",
      confirmButtonColor: "#57b1ef",
      showCancelButton: true,
      cancelButtonText: "Não",
      cancelButtonColor: "red",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setVisible(false);
      }
    });
  };

  return (
    <>
      <Modal
        title="Termos de Uso do Everhooks"
        visible={visible}
        onOk={openNotification}
      >
        <p>hello world</p>
      </Modal>
      <Layout style={{ minHeight: "100vh" }}>
        <HeaderDocumentation />
        <Content className="content-home">
          <Row gutter={[32, 22]}>
            <Col xs={24} xl={5}>
              <SiderComponent />
            </Col>
            <Col xs={24} xl={19}>
              <Row gutter={[32, 22]}>
                <Col xs={24} xl={24}>
                  <Breadcrumb>
                    <Breadcrumb.Item onClick={() => navigate("/")}>
                      <IoHomeOutline />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => navigate("/documentation")}>
                      <IoLogoNodejs className="icon-breadcrumb" />
                      <span>Documentação</span>
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
                <Col xs={24} xl={24}>
                  <Card className="card-documentation">
                    <Row gutter={[32, 22]}>
                      <Col xs={24} xl={24}>
                        <Row gutter={[32, 22]}>
                          <Col xs={24} xl={24}>
                            <h3 className="purple-titlehome">Documentação</h3>
                          </Col>
                          <Col xs={24} xl={24}>
                            <img src={faq} className="illustrantion" />
                          </Col>
                          <Col xs={24} xl={24}>
                            <p>
                              Lorem Ipsum, is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
        <FooterComponent />
      </Layout>
    </>
  );
};
export default Documentation;
