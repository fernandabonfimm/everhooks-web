import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import Announcement from '../components/Announcement'
import {Layout} from 'antd';

const {Content} = Layout;

const Home = () => {
  return (
    <>
    <Layout style={{ minHeight: "100vh" }}>
    <NavbarComponent/>
    <Announcement/>
    <Content>
      Hello World
    </Content>
    <FooterComponent/>
    </Layout>
    </>
  )
}
export default Home;