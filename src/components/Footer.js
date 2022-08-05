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


const FooterComponent = ({ history }) => {
  return (
    <>
      <Footer className="footer-layout">
        <Row gutter={[32, 22]} style={{ padding: "0 2em" }}>
          <Col xs={8} xl={8}>
            <img src={logo} width={320} height={200} alt="logo-footer" />
          </Col>
        </Row>
        <Divider className="divider" />
        <Row gutter={[32, 22]} style={{ padding: "0 2em" }}>
          <Col xs={18} xl={18}>
            <span className="hyperlink-footer">
              {" "}
              Powered with <FaHeart
                style={{ marginRight: 8, marginLeft: 8 }}
              />{" "}
              by{" "}
              <a
                className="hyperlink-footer-evermart"
                onClick={() =>
                  history.push({ pathname: "https://www.evermart.com.br/" })
                }
              >
                Evermart
              </a>
            </span>
          </Col>
          <Col xs={6} xl={6}>
            <Row gutter={[32, 22]}>
              <Col xs={8} xl={8}>
                <Button
                  className="rounded-icon"
                  onClick={() =>
                    history.push({
                      pathname:
                        "https://www.linkedin.com/company/evermart/mycompany/",
                    })
                  }
                >
                  <RiLinkedinFill />
                </Button>
              </Col>
              <Col xs={8} xl={8}>
                <Button
                  className="rounded-icon"
                  onClick={() =>
                    history.push({
                      pathname: "https://www.instagram.com/evermart.br/",
                    })
                  }
                >
                  <RiInstagramFill />
                </Button>
              </Col>
              <Col xs={8} xl={8}>
                <Button
                  className="rounded-icon"
                  onClick={() =>
                    history.push({
                      pathname:
                        "https://api.whatsapp.com/send?phone=+5511994979707&text=Ol%C3%A1!%20Preciso%20de%20suporte,%20pode%20me%20ajudar?",
                    })
                  }
                >
                  <RiWhatsappFill />
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Footer>
    </>
  );
};
export default FooterComponent;
