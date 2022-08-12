import React, { useState } from "react";
import {  Row, Col, Card, Button, Tag, Input } from "antd";
import { MdFileCopy } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const CardFaq1False = () => {
    const navigate = useNavigate();
    const [https, setHttps] = useState("https://everhooks.site/uuidgenerate");
    function copiarHttps() {
      let httpsCopiada = document.getElementById("https");
      httpsCopiada.select();
      httpsCopiada.setSelectionRange(0, 99999);
      document.execCommand("copy");
    }
  return (
    <>

          <Col xs={24} xl={24}>
            <Card className="card-faq-white">
              <Row gutter={[32, 22]}>
                <Col xs={4} xl={4}>
                  <Tag className="pass-tag-faq">1° Passo</Tag>
                </Col>
                <Col xs={24} xl={24}>
                  <span className="explicit">
                    Siga até a pagina inicial do{" "}
                    <a className="hyperlink-faq" onClick={() => navigate("/")}>
                      EverHooks
                    </a>
                  </span>
                </Col>
                <Col xs={4} xl={4}>
                  <Tag className="pass-tag-faq">2° Passo</Tag>
                </Col>
                <Col xs={24} xl={24}>
                  <span className="explicit">
                  Escolha um software de testes de API de sua escolha e logo em seguida insira a HTTPS no Header e a URL Encodded no body para gerar a requisição desejada.
                  </span>
                </Col>
                <Col xs={20} xl={20}>
                  <Input
                    name="https"
                    id="https"
                    value={https}
                    className="input-https"
                  />
                </Col>
                <Col xs={4} xl={4}>
                  <Tag className="tag-copy" onClick={copiarHttps}>
                    <MdFileCopy />
                  </Tag>
                </Col>
                <Col xs={4} xl={4}>
                  <Tag className="pass-tag-faq">3° Passo</Tag>
                </Col>
                <Col xs={24} xl={24}>
                  <span className="explicit">
                  Após solicitar a requisição na página principal do 
                    <a className="hyperlink-faq" onClick={() => navigate("/")}>
                      EverHooks
                    </a>
                    , aparecerá a sua requisição com o id, data e o tipo de requisição. Clique em cima da requisição para ver seu conteúdo bruto, JSON e informações.
                  </span>
                </Col>
              </Row>
            </Card>
          </Col>

    </>
  );
};
export { CardFaq1False };
