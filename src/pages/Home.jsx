import { Layout } from 'antd';
import { useParams } from 'react-router-dom';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ActortList from "../components/ActortList";
import { useActors } from '../react-query';
const { Header, Content, Footer } = Layout;

function Home() {

  const { categoryName } = useParams();
  const url = categoryName || "";
  const { data, isLoading } = useActors(url);
  const actors = data?.data || [];
  const title = url === ""
    ? "Heart Stopper"
    : actors[0]?.category.toUpperCase();

  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title={title} isLoading={isLoading} />
      </Header>
      <Content className="layout-content">
        <ActortList actors={actors} isLoading={isLoading} />
      </Content>
      <Footer className="layout-footer">
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default Home;
