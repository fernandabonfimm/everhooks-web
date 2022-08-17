import React from "react";
import { Row, Col } from "antd";
import "../../../../styles/pages/documentation.css";
import { IoLogoNodejs } from "react-icons/io";

const CodeDocumentation = () => {
  return (
    <>
      <Row gutter={[32, 22]} style={{ marginTop: 60 }}>
        <Col xs={24} xl={24}>
          <h4 className="title-purple-documentation">
            Documentação da criação do UUID em NodeJs
            <IoLogoNodejs />
          </h4>
        </Col>
        <Col xs={24} xl={24}>
          <span className="explict-code">
            Possuimos três rotas na API, são elas ‘/’ e ‘/uuid’ (uuid é
            parâmetro de url) para get e ‘/uuid’ (uuid é parâmetro de url) para
            post. A primeira é usada quando o cliente nunca acessou o EverHook
            ou possui seu uuid expirado, esta rota é responsável por gerar um
            uuid novo e gravá-lo no banco de dados não relacional MongoDB.
          </span>
        </Col>
        <Col xs={24} xl={24}>
          <pre className="code-node">
            <code>
              <span style={{ color: "#0000CD" }}>
                router.<a style={{ color: "#FFD700" }}>get</a>(
                <a style={{ color: "#FF4500" }}>"/"</a>,{" "}
                <a style={{ color: "#57b1ef" }}>async</a> (req,{" "}
                <a style={{ color: "#57b1ef" }}>res</a>) ={">"} {"{"}
              </span>
              <br />
              <span style={{ color: "#0000CD" }}>
                const <a style={{ color: "#FFD700" }}>result</a> ={" "}
                <a style={{ color: "#FFD700" }}>verify</a>(null,{" "}
                <a style={{ color: "#57b1ef" }}>req</a>);
              </span>
              <br />
              <span style={{ color: "#57b1ef" }}>
                res.<a style={{ color: "#FFD700" }}>json</a>(result);
              </span>
              <br />
              <span style={{ color: "#0000CD" }}>{"}"});</span>
            </code>
          </pre>
        </Col>
        <Col xs={24} xl={24}>
          <span className="explict-code">
            A segunda rota é chamada caso haja um uuid válido armazenado no
            local storage do navegador, é responsabilidade desta rota retornar
            todos os dados do MongoDB que possuem uuid passado como parâmetro na
            url como token.
          </span>
        </Col>
        <Col xs={24} xl={24}>
          <pre className="code-node">
            <code>
              <span style={{ color: "#0000CD" }}>
                router.<a style={{ color: "#FFD700" }}>get</a>(
                <a style={{ color: "#FF4500" }}>"/:uuid"</a>,{" "}
                <a style={{ color: "#57b1ef" }}>async</a> (req,{" "}
                <a style={{ color: "#57b1ef" }}>res</a>) ={">"} {"{"}
              </span>
              <br />
              <span style={{ color: "#0000CD" }}>
                const <a style={{ color: "#FFD700" }}>result</a> ={" "}
                <a style={{ color: "#FFD700" }}>verify</a>(req.params.uuid,{" "}
                <a style={{ color: "#57b1ef" }}>res</a>);
              </span>
              <br />
              <span style={{ color: "#57b1ef" }}>
                res.<a style={{ color: "#FFD700" }}>json</a>(result);
              </span>
              <br />
              <span style={{ color: "#0000CD" }}>{"}"});</span>
            </code>
          </pre>
        </Col>
        <Col xs={24} xl={24}>
          <span className="explict-code">
            A terceira rota é usada para armazenar dados vindos de um tester
            (postman por exemplo) no MongoDB com uuid já existente e válido, e
            os dados gravados através desta rota, serão acessados pela rota
            ‘/uuid’ de get, segunda rota mencionada acima.
          </span>
        </Col>
        <Col xs={24} xl={24}>
          <pre className="code-node">
            <code>
              <span style={{ color: "#0000CD" }}>
                router.<a style={{ color: "#FFD700" }}>post</a>(
                <a style={{ color: "#FF4500" }}>"/:uuid"</a>,{" "}
                <a style={{ color: "#57b1ef" }}>async</a> (req,{" "}
                <a style={{ color: "#57b1ef" }}>res</a>) ={">"} {"{"}
              </span>
              <br />
              <span style={{ color: "#0000CD" }}>
                const <a style={{ color: "#FFD700" }}>handle</a> ={" "}
                <a style={{ color: "#FFD700" }}>handleData</a>(req.params.uuid,{" "}
                <a style={{ color: "#57b1ef" }}>req</a>);
              </span>
              <br />
              <span style={{ color: "#57b1ef" }}>
                res.<a style={{ color: "#FFD700" }}>json</a>(handle);
              </span>
              <br />
              <span style={{ color: "#0000CD" }}>{"}"});</span>
            </code>
          </pre>
        </Col>
      </Row>
    </>
  );
};
export default CodeDocumentation;
