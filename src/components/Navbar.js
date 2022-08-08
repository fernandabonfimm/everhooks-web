import { Row, Col, Layout, Button } from "antd";
import logo from "../logoeverhooks.png";
import "../styles/components/navbar.css";
import { FaNodeJs, FaHeadset } from "react-icons/fa";
import evermart from "../evermart.png";
import woman from "../woman.png";
import { MdOutlineHelpOutline } from "react-icons/md";

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
                <a className="hyperlink" onClick={() => history.push("/")}>
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
                    history.push(
                      "https://ajuda.evermart.com.br/docs/sobre/integracoes/o-que-sao-e-como-usar-os-webhooks/"
                    )
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
                history.push(
                  "https://qa-dashboard.mycheckout.com.br/integrations/webhooks/new"
                )
              }
            >
              Acessar Evermart
            </Button>
          </Col>
        </Row>
      </Header>
      <Header className="content-announcement">
        <Row gutter={[32, 22]}>
          <Col xs={16} xl={16}>
            <Row>
              <Col xs={24} xl={24}>
                <h1>Seja Bem-vindo à</h1>
              </Col>
              <Col xs={24} xl={24}>
                <img src={evermart} width={300} heighalt="evermart" />
              </Col>
              <Col xs={15} xl={15}>
                <span>
                  Nós permitimos inspecionar, testar e automatizar facilmente
                  (com o construtor visual de ações personalizadas) qualquer
                  solicitação HTTPS.
                </span>
              </Col>
              <Col xs={24} xl={24}>
                <Button className="btnfaq" onClick={() => history.push("/")}>
                  <MdOutlineHelpOutline className="whiteicon-btn" />
                  O’que é o Everhooks
                </Button>
              </Col>
            </Row>
          </Col>
          <Col xs={8} xl={8}>
            <img src={woman} width={320} height={300} alt="person-woman" />
          </Col>
        </Row>
      </Header>
    </>
  );
};
export default NavbarComponent;
