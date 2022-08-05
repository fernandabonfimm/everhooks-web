import { Row, Col, Layout, Button } from "antd";
import logo from "../logoeverhooks.png";
import "../styles/components/navbar.css";
import { FaNodeJs, FaHeadset } from "react-icons/fa";
const { Header } = Layout;
const NavbarComponent = ({ history }) => {
  return (
    <>
      <Header className="navbarlayout">
        <Row gutter={[32, 22]}>
          <Col xs={7} xl={7}>
            <img src={logo} width={130} height={70} alt="logo-everhooks" />
          </Col>
          <Col xs={5} xl={5}>
            <Row gutter={[22, 8]}>
              <Col xs={4} xl={4} style={{ marginTop: 5 }}>
                <FaNodeJs className="icon-navbar" />
              </Col>
              <Col xs={20} xl={20}>
                <a
                  className="hyperlink"
                  onClick={() => history.push({ pathname: "/" })}
                >
                  Documentação
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs={7} xl={7}>
            <Row gutter={[22, 8]}>
              <Col xs={4} xl={4} style={{ marginTop: 5 }}>
                <FaHeadset className="icon-navbar" />
              </Col>
              <Col xs={20} xl={20}>
                <a
                  className="hyperlink"
                  onClick={() =>
                    history.push({
                      pathname:
                        "https://ajuda.evermart.com.br/docs/sobre/integracoes/o-que-sao-e-como-usar-os-webhooks/",
                    })
                  }
                >
                  Suporte e Ajuda
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs={5} xl={5}>
            <Button
              className="btnaccess"
              onClick={() =>
                history.push({
                  pathname:
                    "https://qa-dashboard.mycheckout.com.br/integrations/webhooks/new",
                })
              }
            >
              Acessar Evermart
            </Button>
          </Col>
        </Row>
      </Header>
    </>
  );
};
export default NavbarComponent;
