import React from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form, Input, message } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import BaseContext from "../../../hooks/context";

import { topicApi } from "../../../services/topic.api";

export default function CreateCategoryModal() {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [form] = Form.useForm();
  const baseCtx = React.useContext(BaseContext)

  const onFinish = async (values) => {
    const token = sessionStorage.getItem("token");
    try {
      let response = await topicApi.add(
        JSON.stringify({
          summary: "",
          content: values.category_name,
        }),
        token
      );

      if (response.status === 201) {
        message.success("Tạo thể loại bài viết thành công!");
        navigate("/post");
        setIsModalVisible(false)
        baseCtx.changeReload()
      }
      // redirect to dashboard
    } catch (error) {
      if (error.response) {
        message.error(error.response.data.message);
        form.resetFields();
      }
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button
        style={{ marginLeft: 10, borderRadius: "50%" }}
        onClick={showModal}
        icon={<PlusCircleOutlined />}
      />
      <Modal
        title="Tạo mới thể loại bài viết"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>Cancel</Button>,
          <Button form="myForm" key="submit" type="primary" htmlType="submit">
            Submit
          </Button>,
        ]}
      >
        <Form
          form={form}
          name="myForm"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Thể loại bài viết"
            name="category_name"
            rules={[{ required: true, message: "Please input category name!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
