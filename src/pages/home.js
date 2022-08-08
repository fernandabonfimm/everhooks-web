import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import Announcement from '../components/Announcement'
import {Layout} from 'antd';

import React, { useEffect, useState} from 'react';
import axios from 'axios';
import api from './Api.js';

const {Content} = Layout;

const Home = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('api')
    .then(res => {
        console.log(res.data);
        const dado = res.data.message;
        setData(String(dado));
    })
  }, []);

  return (
    <>
    <Layout style={{ minHeight: "100vh" }}>
    <NavbarComponent/>
    <Announcement/>
    <Content>
      {data}
    </Content>
    <FooterComponent/>
    </Layout>
    </>
  )
}
export default Home;