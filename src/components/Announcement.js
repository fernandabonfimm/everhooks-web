import { Layout, Row, Col } from "antd";
import "../styles/components/announcement.css";
import woman from "../woman.png";
import evermart from "../evermart.png";
const { Header } = Layout;
const Announcement = () => {
  return (
    <>
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
                  solicitação HTTP.
                </span>
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
export default Announcement;
