import { Row, Col, Layout, Button } from "antd";
import logo from "../logoeverhooks.png";
import "../styles/components/navbar.css";
import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import evermart from "../evermart.png";
import woman from "../woman.png";
import { useNavigate } from "react-router-dom";
import { IoInfiniteOutline } from "react-icons/io5";

const { Header } = Layout;

const NavbarComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header className="navbarlayout">
        <Row gutter={[32, 22]}>
          <Col xs={8} xl={7}>
            <img
              src={logo}
              className="logo-everhooks"
              onClick={() => navigate("/")}
            />
          </Col>
          <Col xs={5} xl={5}>
            <Row gutter={[22, 8]}>
              <Col xs={4} xl={4} style={{ marginTop: 5 }}>
                <a
                  href="https://www.instagram.com/evermart.br/"
                  target="_blank"
                >
                  {" "}
                  <AiOutlineInstagram className="icon-navbar" />
                </a>
              </Col>
              <Col xs={0} xl={20}>
                <a
                  className="hyperlink"
                  href="https://www.instagram.com/evermart.br/"
                  target="_blank"
                >
                  @evermart.br
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs={5} xl={7}>
            <Row gutter={[22, 8]}>
              <Col xs={2} xl={4} style={{ marginTop: 5 }}>
                <a
                  href="https://api.whatsapp.com/send?phone=+5511994979707&text=Ol%C3%A1!%20Preciso%20de%20suporte,%20pode%20me%20ajudar?"
                  target="_blank"
                >
                  <AiOutlineWhatsApp className="icon-navbar" />
                </a>
              </Col>
              <Col xs={0} xl={20}>
                <a
                  className="hyperlink"
                  href="https://api.whatsapp.com/send?phone=+5511994979707&text=Ol%C3%A1!%20Preciso%20de%20suporte,%20pode%20me%20ajudar?"
                  target="_blank"
                >
                  Suporte e Ajuda
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs={5} xl={5}>
            <Button
              className="btnaccess a.ant-btn"
              href="https://qa-dashboard.mycheckout.com.br/login"
              target="_blank"
            >
              Acessar Evermart
            </Button>
            <Button
              className="btnaccess-responsive"
              href="https://qa-dashboard.mycheckout.com.br/login"
              target="_blank"
            >
              <IoInfiniteOutline />
            </Button>
          </Col>
        </Row>
      </Header>

      <Header className="content-announcement">
        <Row gutter={[32, 22]}>
          <Col xs={24} xl={16}>
            <Row>
              <Col xs={24} xl={24}>
                <span className="white-titlenavbar">Seja Bem-vindo à</span>
              </Col>
              <Col xs={24} xl={24}>
                <img src={evermart} alt="evermart" className="logo-evermart" />
              </Col>
              <Col xs={24} xl={18}>
                <p className="white-subtitlenavbar">
                  Nós permitimos inspecionar, testar e automatizar facilmente
                  com o construtor visual de ações personalizadas qualquer
                  solicitação HTTPS.
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={24} xl={8}>
            <img src={woman} alt="person-woman" className="person-woman" />
          </Col>
        </Row>
      </Header>
    </>
  );
};
export default NavbarComponent;
