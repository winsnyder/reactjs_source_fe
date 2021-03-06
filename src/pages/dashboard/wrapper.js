import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Import Component Ant Design
import { Button, Layout, Menu, Popover } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  ProfileOutlined,
  NotificationOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

// Import CSS define
import "../../assets/styles/wrapper.css";
import "../../assets/styles/style.css";

import profile from "../../assets/images/profile.jpeg";

const { Header, Sider, Content, Footer } = Layout;

export default function LayoutWrapper(props) {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const popover_content = (
    <>
      <Button
        style={{ borderRadius: 50 }}
        onClick={() => navigate("/login")}
        icon={<LogoutOutlined />}
      />{" "}
      Logout
    </>
  );

  let key = "";
  if (location.pathname.indexOf("user") > -1) {
    key = "1";
  } else if (location.pathname.indexOf("post") > -1) {
    key = "2";
  } else {
    key = "3";
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={toggle}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[key]}>
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
          {/*Option Profile*/}
          <Popover
            content={popover_content}
            title="Options"
            placement="bottomRight"
          >
            <div className="options-profile">
              <img src={profile} alt="" />
            </div>
          </Popover>
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
