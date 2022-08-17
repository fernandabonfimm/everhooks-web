import { Row, Col, Layout, Button } from "antd";
import logo from "../logoeverhooks.png";
import "../styles/components/headerdocumentation.css";
import { FaNodeJs, FaHeadset } from "react-icons/fa";
import evermart from "../evermart.png";
import supportWoman from "../support-woman.png";
import { MdOutlineHelpOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {IoInfiniteOutline} from 'react-icons/io5'
const { Header } = Layout;

const HeaderDocumentation = () => {
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
                <FaNodeJs className="icon-navbar" onClick={() => navigate("/documentation")} target="_blank" />
              </Col>
              <Col xs={0} xl={20}>
                <a className="hyperlink" onClick={() => navigate("/documentation")} target="_blank">
                  Documentação
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs={5} xl={7}>
            <Row gutter={[22, 8]}>
              <Col xs={2} xl={4} style={{ marginTop: 5 }}>
                <FaHeadset className="icon-navbar" onClick={() => navigate("/faq")} target="_blank" />
              </Col>
              <Col xs={0} xl={20}>
                <a className="hyperlink" onClick={() => navigate("/faq")} target="_blank">
                  Suporte e Ajuda
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs={5} xl={5}>
            <Button
              className="btnaccess"
              href="https://qa-dashboard.mycheckout.com.br/integrations/webhooks/new"
              target="_blank"
            >
              Acessar Evermart
            </Button>
            <Button
              className="btnaccess-responsive"
              href="https://qa-dashboard.mycheckout.com.br/integrations/webhooks/new"
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
              <span className="white-titlenavbar">Seja Bem-vindo ao Suporte</span>
              </Col>
              <Col xs={24} xl={24}>
              <img src={evermart} alt="evermart" className="logo-evermart" />
              </Col>
              <Col xs={18} xl={18}>
              <p className="white-subtitlenavbar">
              Nossa missão é trazer a melhor experiência possivel, para nossos clientes e colaboradores.
            </p>
              </Col>
              <Col xs={24} xl={24}>
              <Button className="btnfaq" onClick={() => navigate("/")}>
              <MdOutlineHelpOutline className="whiteicon-btn"  />
              Voltar ao teste Everhooks
            </Button>
              </Col>
            </Row>
          </Col>
          <Col xs={24} xl={8}>
            <img src={supportWoman}  alt="support-woman" className="support-woman" />
          </Col>
        </Row>
      </Header>
    </>
  );
};
export default HeaderDocumentation;
