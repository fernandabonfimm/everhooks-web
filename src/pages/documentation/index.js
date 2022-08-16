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
  Divider,
} from "antd";
import "../../styles/pages/documentation.css";
import SiderComponent from "../../components/Sider";
import { useNavigate } from "react-router-dom";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { BsFillCircleFill } from "react-icons/bs";
import { MdFileCopy } from "react-icons/md";
import Alert from "sweetalert2";

const { Content } = Layout;
const { TextArea } = Input;

const Documentation = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [https, setHttps] = useState(
    "curl https://everhooks.com/token/a2a6a4ae-4130-4063-953a-84fa29d81d43/requests"
  );
  const [code, setCode] = useState();

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
                  <Row gutter={[32, 22]}>
                    <Col xs={24} xl={24}>
                      <h2 className="title-purple-documentation">
                        Documentação API
                      </h2>
                    </Col>
                    <Col xs={24} xl={24}>
                      <p className="explict-code">
                        A API do Everhooks é pública, de uso gratuito, não
                        requer autenticação e é relativamente fácil de usar.
                      </p>
                    </Col>
                    <Col xs={24} xl={24}>
                      <Card title="Nota importante" className="terms of use">
                        <Row gutter={[32, 22]}>
                          <Col xs={2} xl={2}>
                            <BsFillCircleFill className="circle" />
                          </Col>
                          <Col xs={22} xl={22}>
                            <span className="description-card">
                              Observe que as diretrizes de uso justo e outras
                              limitações se aplicam conforme descrito pelo{" "}
                              <a className="terms-use" onClick={showModal}>
                                Termos de Uso
                              </a>
                            </span>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>
                  <Row gutter={[32, 22]} style={{ marginTop: 60 }}>
                    <Col xs={24} xl={24}>
                      <h4 className="title-purple-documentation">Uso Geral</h4>
                    </Col>
                    <Col xs={24} xl={24}>
                      <span className="explict-code">
                        Base URL:{" "}
                        <a className="baseurl">https://everhooks.com</a>
                      </span>
                    </Col>
                    <Col xs={24} xl={24}>
                      <span className="explict-code">
                        Recomendamos que você defina os cabeçalhos,{" "}
                        <a className="baseurl">Accept </a>e
                        <a className="baseurl">Content-Type </a> como
                        <a className="baseurl">application/json </a>
                      </span>
                    </Col>
                  </Row>
                  <Row gutter={[32, 22]} style={{ marginTop: 60 }}>
                    <Col xs={24} xl={24}>
                      <h4 className="title-purple-documentation">
                        Usos comuns
                      </h4>
                    </Col>
                    <Col xs={24} xl={24}>
                      <span className="explict-code">
                        Para recuperar os dados que são enviados para uma URL ou
                        e-mail Webhook.site, convém usar o ponto de extremidade
                        Get Requests.
                      </span>
                    </Col>
                    <Col xs={24} xl={24}>
                      <span className="explict-code">
                        Por exemplo, com <a className="baseurl">cURL</a> , isso
                        retorna as 50 solicitações mais recentes no formato
                        JSON.
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
                  </Row>
                  <Row gutter={[32, 22]} style={{ marginTop: 60 }}>
                    <Col xs={24} xl={24}>
                      <h4 className="title-purple-documentation">
                        Criar nova URL
                      </h4>
                    </Col>
                    <Col xs={24} xl={24}>
                      <span className="explict-code">
                        Na API do Everhooks.com, isso é chamado de token. Para
                        criar um novo programaticamente, você pode usar a API
                        assim:
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
                    <Col xs={24} xl={24}>
                      <span className="explict-code">
                        Isso retornará informações sobre o token no formato
                        JSON, incluindo seu UUID. Sua URL estará disponível no
                        endpoint
                        <a className="baseurl">
                          https://everhooks.com/[token uuid]
                        </a>
                      </span>
                    </Col>
                  </Row>
                  <Divider className="divider" />
                  <Row gutter={[32, 22]} style={{ marginTop: 60 }}>
                    <Col xs={1} xl={1}>
                      <FaNodeJs className="icone-node" />
                    </Col>
                    <Col xs={23} xl={23}>
                      <h4 className="title-purple-documentation">NodeJs</h4>
                    </Col>
                    <Col>
                      <h3>Criar token (URL)</h3>
                      <span className="explict-code">
                        Cria um token Everhook e gera sua URL da Web. Você
                        precisará substituir a chave de API.
                      </span>
                    </Col>
                  </Row>
                  <Row gutter={[32, 22]} style={{ marginTop: 20 }}>
                    <Col>
                      <pre className="pre-format">
                        <code>
                          $apiKey = '00000000-0000-0000-0000-000000000000';
                          <br />
                          // Cria um contexto de fluxo
                          <br />
                          $context = stream_context_create(['http' = [<br />
                          'method' = 'POST',
                          <br />
                          'header' = "Api-Key: $apiKey\r\n"
                          <br />
                          ]]);
                          <br />
                          // Envia solicitação de API
                          <br />
                          $response =
                          json_decode(file_get_contents('https://webhook.site/token',
                          false, $context), true);
                          <br />
                          echo "URL Created: https://everhook.com/
                          {"$response[uuid]"};
                        </code>
                      </pre>
                    </Col>
                  </Row>
                  <Row gutter={[32, 22]} style={{ marginTop: 20 }}>
                    <Col>
                      <h3>Buscar dados mais recentes</h3>
                      <span className="explict-code">
                        Exemplo simples de como percorrer as últimas
                        solicitações enviadas para um URL do Everhook e exibir
                        de maneira amigável.
                        <br />
                        Você precisará substituir a chave de API e o ID do
                        token.
                      </span>
                    </Col>
                  </Row>
                  <Row gutter={[32, 22]} style={{ marginTop: 20 }}>
                    <Col>
                      <pre className="pre-format">
                        <code>
                          $apiKey = '00000000-0000-0000-0000-000000000000';
                          <br />
                          $tokenId = '00000000-0000-0000-0000-000000000000';
                          <br />
                          $url =
                          "https://everhook.com/token/$tokenId/requests?sorting=newest";
                          <br />
                          $context = stream_context_create(['http' = ['header' =
                          "Api-Key: $apiKey\r\n"]]);
                          <br />
                          $response = json_decode(file_get_contents($url, false,
                          $context), true)
                          <br />
                          foreach ($response['data'] as $req) <br />
                          echo \n
                          <br />
                          echo ID : {"$req[uuid]"}\n
                          <br />
                          echo Type : {"$req[type]"}\n
                          <br />
                          echo Date : {"$req[created_at]"}\n
                          <br />
                          echo User-Agent:{" "}
                          {"$req[headers][user-agent][0] ?? Unknown"}\n
                          <br />
                          echo --- content begin ---\n
                          <br />
                          echo $req['content']
                          <br />
                          echo \n--- content end ---\n
                        </code>
                      </pre>
                    </Col>
                  </Row>
                  <Row gutter={[32, 22]} style={{ marginTop: 20 }}>
                    <Col>
                      <span className="explict-code">
                        Exemplo de saída após a execução, por exemplo : curl -X
                        POST
                        <br />
                        https://everhook.com/00000000-0000-0000-0000-000000000000
                        -d "Hello world":
                      </span>
                    </Col>
                  </Row>
                  <Row gutter={[32, 22]} style={{ marginTop: 20 }}>
                    <Col>
                      <pre className="pre-format">
                        <code>
                          ID : 58980c49-7e09-4cd8-8d64-bbfcfc38a1c5
                          <br />
                          Type : web
                          <br />
                          Date : 2021-12-01 19:24:10
                          <br />
                          User-Agent: Paw/3.3.1 (Macintosh; OS X/11.6.0)
                          GCDHTTPRequest
                          <br />
                          --- content begin ---
                          <br />
                          Hello world!
                          <br />
                          --- content end ---
                        </code>
                      </pre>
                    </Col>
                  </Row>
                  <Row gutter={[32, 22]} style={{ marginTop: 20 }}>
                    <Col xs={23} xl={23}>
                      <h4 className="title-purple-documentation">Tokens</h4>
                      <span className="explict-code">
                        Um token é um contêiner para solicitações recebidas e
                        corresponde a uma URL Evermart.com.
                        <br />
                        Um ID de token é um UUID de 36 caracteres que consiste
                        em caracteres hexadecimais e traços.
                        <br />
                        Simplesmente, o ID do token é a parte posterior
                        https://everhook.com/ na URL.
                      </span>
                    </Col>
                  </Row>
                  <Row gutter={[32, 22]} style={{ marginTop: 20 }}>
                    <Col>
                      <h3 className="average-font">Criar token</h3>
                      <h3 className="explict-code">Publicar</h3>

                      <ul>
                        <li>default_*: parâmetros define a resposta da URL</li>
                        <li>
                          timeout: aguarda uma quantidade de segundos antes de
                          retornar a resposta (destinado a testar tempos limite)
                        </li>
                        <li>
                          texpiry: definido como truefará com que o token seja
                          excluído automaticamente dentro de 7 dias sem
                          atividade. Se estiver usando tokens para testes
                          automatizados, por exemplo, você pode habilitar isso
                          para evitar o preenchimento de seu perfil de usuário.
                        </li>
                      </ul>
                    </Col>
                  </Row>
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
