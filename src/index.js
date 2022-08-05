import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'antd/dist/antd.css';
import {ConfigProvider} from 'antd';
import Home from './pages/home';
import ptBR from 'antd/lib/locale/pt_BR'
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={ptBR}>
    <Home />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
