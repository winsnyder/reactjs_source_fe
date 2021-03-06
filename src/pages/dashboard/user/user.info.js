import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Row, Col, message } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import LayoutWrapper from "../wrapper";

import { userApi } from "../../../services/user.api";

import "../../../assets/styles/style.css";

const { TextArea } = Input;

export default function UserInfoPage() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    if (values.password != values.repassword) {
      message.warn("Mật khẩu không khớp vui lòng nhập lại");
    } else {
      try {
        const token = sessionStorage.getItem("token");
        await userApi.add(
          JSON.stringify({
            username: values.username,
            password: values.password,
          }),
          token
        );
        message.success("Tại tài khoản thành công!")
        // redirect to dashboard
        navigate("/user");
      } catch (error) {
        if (error.response) {
          message.error(error.response.data.message);
          form.resetFields();
        }
      }
    }
  };

  return (
    <LayoutWrapper>
      <div className="user-header">Tạo Mới User Quản Trị Hệ Thống</div>
      <div className="user-form">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Row ustify="space-around" align="middle">
            <Col lg={{ span: 10 }}>
              <Form.Item
                label="Tên tài khoản"
                name="username"
                required
                tooltip="This is a required field"
              >
                <Input placeholder="input placeholder" />
              </Form.Item>
            </Col>
            <Col lg={{ span: 10, offset: 2 }}>
              <Form.Item
                label="Hộp thư thoại"
                tooltip={{
                  title: "Tooltip with customize icon",
                  icon: <InfoCircleOutlined />,
                }}
              >
                <Input placeholder="input placeholder" />
              </Form.Item>
            </Col>
          </Row>
          <Row ustify="space-around" align="middle">
            <Col lg={{ span: 10 }}>
              <Form.Item label="Địa chỉ" tooltip="This is a required field">
                <Input placeholder="input placeholder" />
              </Form.Item>
            </Col>
            <Col lg={{ span: 10, offset: 2 }}>
              <Form.Item
                label="Số điện thoại"
                tooltip={{
                  title: "Tooltip with customize icon",
                  icon: <InfoCircleOutlined />,
                }}
              >
                <Input placeholder="input placeholder" />
              </Form.Item>
            </Col>
          </Row>
          <Row ustify="space-around" align="middle">
            <Col lg={{ span: 10 }}>
              <Form.Item
                label="Mật Khẩu"
                name="password"
                required
                tooltip="This is a required field"
              >
                <Input.Password />
              </Form.Item>
            </Col>
            <Col lg={{ span: 10, offset: 2 }}>
              <Form.Item
                label="Ghi chú"
                tooltip={{
                  title: "Tooltip with customize icon",
                  icon: <InfoCircleOutlined />,
                }}
              >
                <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
              </Form.Item>
            </Col>
          </Row>
          <Row ustify="space-around" align="middle">
            <Col lg={{ span: 10 }}>
              <Form.Item
                label="Xác Nhận Mật Khẩu"
                name="repassword"
                required
                tooltip="This is a required field"
              >
                <Input.Password />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button
              type="primary"
              style={{ marginRight: 10 }}
              danger
              onClick={() => navigate("/user")}
            >
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </LayoutWrapper>
  );
}
