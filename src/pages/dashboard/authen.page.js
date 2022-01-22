import React, { useContext, useEffect } from "react";
import { Tabs } from "antd";
import LoginForm from "../../components/authen/login.form";
import SignupForm from "../../components/authen/signup.form";
import BaseContext from "../../hooks/context";

/*Import CSS*/
import "../../assets/styles/login.css";

const { TabPane } = Tabs;

export default function Login() {
  const baseCtx = useContext(BaseContext);

  const handleSwitch = (key) => {
    baseCtx.changeTab(key);
  };

  /*init tab*/
  useEffect(() => {
    baseCtx.changeTab("1");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="wrapper-form">
      <Tabs
        activeKey={baseCtx.tab}
        onChange={handleSwitch}
        defaultActiveKey={baseCtx.tab}
      >
        <TabPane tab="LOGIN" key="1">
          <LoginForm />
        </TabPane>
        <TabPane tab="SIGNUP" key="2">
          <SignupForm />
        </TabPane>
      </Tabs>
    </div>
  );
}
