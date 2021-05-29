import React from "react";
import "./index.css";
import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer } = Layout;

export default (props) => {
  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="layout-content">{props.children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        React 版后台 ©2021 Created by Sanjay
      </Footer>
    </Layout>
  );
};
