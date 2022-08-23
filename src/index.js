import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import 'antd/dist/antd.min.css'
import { ConfigProvider } from "antd";
import RoutesComponent from './utils/Routes'
import ptBR from "antd/lib/locale/pt_BR";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider locale={ptBR}>
        <RoutesComponent/>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(sendToVercelAnalytics);
