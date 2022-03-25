import React from "react";

import { Form, Input, Button, message } from "antd";
import { contactApi } from "../../services/contact.api";

const { TextArea } = Input;

export default function FeedBack() {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      let response = await contactApi.add(
        JSON.stringify({
          fullname: values.fullname,
          email: values.email,
          phone: values.phone,
          content: values.content,
        })
      );

      if (response.status === 201) {
        message.success(
          "Phản hồi của bạn đã được ghi nhận. Hệ thống sẽ gửi câu trả lời cho bạn trong thời gian ngắn nhất."
        );
        form.resetFields();
      }
    } catch (error) {
      if (error.response) {
        message.error(error.response.data.message);
        form.resetFields();
      }
    }
  };

  return (
    <div className="content-body">
      <div className="container">
        <div className="row">
          <main className="col-md-12">
            <h1 className="page-title">Phản hồi & Đặt câu hỏi</h1>
            <article className="post">
              <Form
                name="basic"
                form={form}
                labelCol={{
                  span: 8,
                }}
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  label="Họ Tên"
                  name="fullname"
                  rules={[
                    {
                      required: true,
                      message: "Hãy nhập họ tên của bạn!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item label="Địa chỉ hòm thư" name="email">
                  <Input />
                </Form.Item>

                <Form.Item label="Số điện thoại liên hệ" name="phone">
                  <Input />
                </Form.Item>

                <Form.Item label="Nội dung" name="content">
                  <TextArea rows={7} />
                </Form.Item>

                <Form.Item
                //   wrapperCol={{
                //     offset: 9,
                //   }}
                >
                  <Button type="primary" htmlType="submit">
                    Gửi phản hồi
                  </Button>
                </Form.Item>
              </Form>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
