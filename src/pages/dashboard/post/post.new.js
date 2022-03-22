import React from "react";
import { useNavigate } from "react-router-dom";
import LayoutWrapper from "../wrapper";

import { Select } from "antd";
import { Form, Input, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;
const { TextArea } = Input;

export default function PostNewPage() {
  const navigate = useNavigate();
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (info) => {
    let fileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show the last recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-1);
    setFileList(fileList);
  };

  const [fileList, setFileList] = React.useState([]);

  return (
    <LayoutWrapper>
      <div className="post__new__wrapper">
        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Thể loại bài viết"
            name="post__category"
            rules={[
              {
                required: true,
                message: "Hãy chọn thể loại cho bài viết trong danh sách!",
              },
            ]}
          >
            <Select
              size="large"
              mode="single"
              allowClear
              style={{ width: "30%" }}
              placeholder="Chọn thể loại bài viết"
              //   defaultValue={["a10", "c12"]}
            >
              {children}
            </Select>
          </Form.Item>

          <Form.Item
            label="Tiêu đề tài viết (Title)"
            name="post__title"
            rules={[
              {
                required: true,
                message: "Hãy nhập tiêu đề cho bài viết!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item label="Tóm tắt (Summary)" name="post__summary">
            <Input size="large" />
          </Form.Item>

          <Form.Item label="Nội dung (Content)" name="post__content">
            <TextArea rows={15} />
          </Form.Item>

          <Form.Item label="Hình ảnh minh họa (Image)" name="post__image">
            <Upload fileList={fileList} onChange={handleChange}>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              style={{ marginRight: 10 }}
              danger
              onClick={() => navigate("/post")}
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
