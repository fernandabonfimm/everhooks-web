import { Row, Col, Layout, Divider, Button } from "antd";
import "../styles/components/footer.css";
import { FaHeart } from "react-icons/fa";
import {
  RiInstagramFill,
  RiLinkedinFill,
  RiWhatsappFill,
} from "react-icons/ri";
import logo from "../logofooter.png";

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <>
      <Footer className="footer-layout">
        <Row gutter={[32, 22]} className="padding-row">
          <Col xs={24} xl={8}>
            <img src={logo} alt="logo footer" className="logo footer" />
          </Col>
          <Col xs={24} xl={9}>
            <Row gutter={[32, 22]} justify="center">
              <h3 className="white-title">EverHooks</h3>
              <br />
              <ul>
                <li className="white-subtitle">
                  Plataforma Web intuitiva e de fácil , para utilizações de
                  callbacks personalizados.
                </li>
                <li className="white-subtitle">
                  Desenvolvida pensada no usuário e no uso do dia a dia.
                </li>
              </ul>
            </Row>
          </Col>
          <Col xs={24} xl={7}>
            <Row gutter={[30, 22]} justify="center">
              <h3 className="white-title">Evermart</h3>
              <br />
              <ul>
                <li className="white-subtitle">
                  A melhor plataforma para se tornar um empreendedor digital.
                  Intuitiva e completa.
                </li>
                <li className="white-subtitle">
                  Desenvolve e ajuda empreendedores digitais.
                </li>
              </ul>
            </Row>
          </Col>
        </Row>
        <Divider className="divider" />
        <Row gutter={[32, 22]} style={{ padding: "0 2em" }}>
          <Col xs={24} xl={18}>
            <span className="hyperlink-footer">
              {" "}
              Powered with <FaHeart
                style={{ marginRight: 8, marginLeft: 8 }}
              />{" "}
              by{" "}
              <a
                className="hyperlink-footer-evermart"
                href="https://www.evermart.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                Evermart
              </a>
            </span>
          </Col>
          <Col xs={24} xl={6}>
            <Row gutter={[32, 22]}>
              <Col xs={8} xl={8}>
                <Button
                  type="primary"
                  shape="circle"
                  icon={<RiLinkedinFill />}
                  className="rounded-icon"
                  href="https://www.linkedin.com/company/evermart/mycompany/"
                  target="_blank"
                ></Button>
              </Col>
              <Col xs={8} xl={8}>
                <Button
                  type="primary"
                  shape="circle"
                  icon={<RiInstagramFill />}
                  className="rounded-icon"
                  href="https://www.instagram.com/evermart.br/"
                  target="_blank"
                ></Button>
              </Col>
              <Col xs={8} xl={8}>
                <Button
                  type="primary"
                  shape="circle"
                  icon={<RiWhatsappFill />}
                  className="rounded-icon"
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=+5511994979707&text=Ol%C3%A1!%20Preciso%20de%20suporte,%20pode%20me%20ajudar?"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Footer>
    </>
  );
};
export default FooterComponent;
