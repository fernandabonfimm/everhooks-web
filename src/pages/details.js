import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Card, Button, Divider, Input, BackTop } from "antd";
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import CardRequests from "../components/cards/CardRequests";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import "../styles/pages/details.css";
import TableHeaders from "../components/tables/TableHeaders";
import {
  getFirstId,
  getUuid,
} from "../../../../Documents/everhooks-web/src/services/apiUuid";
import moment from "moment";

const { Content } = Layout;

const Details = () => {
  const { TextArea } = Input;
  const [rawContent] = useState(
    "hottok=62743c4a5d8b21056fe2adfc&prod=62c84157604923283f4566ce&prod_name=OPERA%C3%87%C3%83O%20MILION%C381RIA&off=62d879bde8b23b66bf5f0f18&price=147.00&aff=&aff_name=&email=teste226g%40evermart.com.br&name=Teste%20Evermart&first_name=Teste&last_name=Evermart&doc=76194026081&phone_local_code=99&phone_number=999999999&phone_checkout_local_code=99&phone_checkout_number=999999999&address=&address_number=&address_country=Brasil&address_district=&address_comp=&address_city=&address_state=&address_zip_code=&transaction=PAY-59995KJ4CY43&xcod=&src=&utm_source=&utm_medium=&utm_campaign=&utm_term=&utm_content=&status=cancelled&payment_engine=evermart&payment_type=credit_card&hotkey=&name_subscription_plan=147%20OPM%2020.07.2022&subscriber_code=&recurrency_period=&cms_marketplace=7.34&cms_vendor=125.70&cms_aff=0.00&coupon_code=&callback_type=1&subscription_status=&transaction_ext=PAY-59995KJ4CY43&sck=&purchase_date=2022-07-22T18%3A14%3A35.542Z&confirmation_purchase_date=2022-07-22T18%3A14%3A35.542"
  );
  function copiarTexto() {
    let textoCopiado = document.getElementById("text");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }
  function copiarJson() {
    let textoCopiado = document.getElementById("json");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <NavbarComponent />
        <Content className="content-home">
          <Row gutter={[32, 22]}>
            <Col xs={24} xl={8}>
              <CardRequests />
            </Col>
            <Col xs={24} xl={16}>
              <Card className="card-home">
                <Row gutter={[32, 22]}>
                  <Col xs={24} xl={24}>
                    <Row gutter={[32, 22]}>
                      <Col xs={24} xl={24}>
                        <h3 className="purple-title">Headers</h3>
                      </Col>
                      <Col xs={24} xl={24}>
                        <TableHeaders />
                      </Col>
                    </Row>
                  </Col>
                  <Divider />
                  <Col xs={24} xl={24}>
                    <Row gutter={[32, 22]}>
                      <Col xs={24} xl={24}>
                        <h3 className="purple-title">Conteúdo em JSON</h3>
                      </Col>
                      <Col xs={24} xl={24}>
                        <TextArea
                          type="json"
                          name="json"
                          id="json"
                          showCount
                          maxLength={2000}
                          className="raw-content"
                          value={rawContent}
                          readOnly
                        />
                      </Col>
                    </Row>
                    <Row justify="end">
                      <Button
                        className="btn-copy"
                        style={{ marginTop: 15 }}
                        onClick={copiarJson}
                      >
                        <MdOutlineContentCopy style={{ marginRight: 10 }} />
                        Copiar JSON
                      </Button>
                    </Row>
                  </Col>
                  <Col xs={24} xl={24}>
                    <Row gutter={[32, 22]}>
                      <Col xs={24} xl={24}>
                        <h3 className="purple-title">Conteúdo Bruto</h3>
                      </Col>
                      <Col xs={24} xl={24}>
                        <TextArea
                          type="text"
                          name="text"
                          id="text"
                          showCount
                          maxLength={2000}
                          className="raw-content"
                          value={rawContent}
                          readOnly
                        />
                      </Col>
                    </Row>
                    <Row justify="end">
                      <Button
                        className="btn-copy"
                        style={{ marginTop: 15 }}
                        onClick={copiarTexto}
                      >
                        <MdOutlineContentCopy style={{ marginRight: 10 }} />
                        Copiar URL Enconded
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </Col>
            <BackTop>
              <div className="backtop">
                <IoIosArrowUp />
              </div>
            </BackTop>
          </Row>
        </Content>
        <FooterComponent />
      </Layout>
    </>
  );
};

export default Details;
