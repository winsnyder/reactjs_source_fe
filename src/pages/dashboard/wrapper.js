import React, { useState } from "react";

// Import Component Ant Design
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  ProfileOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

// Import CSS define
import "../../assets/styles/wrapper.css";

const { Header, Sider, Content, Footer } = Layout;

export default function LayoutWrapper(props) {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={toggle}>
        <div className="logo" />
        {/* {!collapsed ? (
          <img
            src={large_logo}
            alt="Logo VTI"
            style={{
              width: "50%",
              marginLeft: 35,
              marginTop: 5,
              marginBottom: 5,
            }}
          />
        ) : (
          <img
            src={small_logo}
            alt="Logo VTI"
            style={{
              width: "50%",
              marginLeft: 20,
              marginTop: 5,
              marginBottom: 5,
            }}
          />
        )} */}

        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/user">Người dùng</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<ProfileOutlined />}>
            <Link to="/post">Bài viết</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<NotificationOutlined />}>
            <Link to="/contact">Phản hồi</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 300,
          }}
        >
          {props.children}
        </Content>
        <Footer style={{ textAlign: "center" }}>Create by ...</Footer>
      </Layout>
    </Layout>
  );
}
