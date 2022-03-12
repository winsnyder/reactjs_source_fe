import React from "react";
import { Modal, Button, Form, Input } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

export default function CreateCategoryModal() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
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
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel">Cancel</Button>,
          <Button form="myForm" key="submit" type="primary" htmlType="submit">
            Submit
          </Button>,
        ]}
      >
        <Form
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
