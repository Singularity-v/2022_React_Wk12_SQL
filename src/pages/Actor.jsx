
import { Layout } from 'antd';
import { useParams } from 'react-router-dom';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ActorDetail from "../components/ActorDetail";
import { useActortById } from '../react-query';

const { Header, Content, Footer } = Layout;

function Product() {
   const { productId } = useParams();
   const { data, isLoading } = useActortById(productId);
   const actor = data || {};

   return (
      <Layout className="container main-layout">
         <Header className="layout-header">
            <AppHeader title="Know More" />
         </Header>
         <Content className="layout-content">
            <ActorDetail actor={actor} isLoading={isLoading} />
         </Content>
         <Footer className="layout-footer">
            <AppFooter />
         </Footer>
      </Layout>
   );
}

export default Product;
