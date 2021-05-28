import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer } = Layout;

export default (props) => {
  return (
    <Layout>
      <header></header>
      <content></content>
      <Footer style={{ textAlign: "center" }}>
        React 版后台 ©2021 Created by Sanjay
      </Footer>
    </Layout>
  );
};
