import React from "react";
import { useNavigate } from "react-router-dom";
import LayoutWrapper from "../wrapper";

import { message, Select, Spin } from "antd";
import { Form, Input, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import { topicApi } from "../../../services/topic.api";
import { postApi } from "../../../services/post.api";
import BaseContext from "../../../hooks/context";

const { Option } = Select;
const { TextArea } = Input;

export default function PostNewPage() {
  const baseCtx = React.useContext(BaseContext);
  const navigate = useNavigate();
  const [cate, setCate] = React.useState([]);
  const [snipping, setSnipping] = React.useState(false);

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

  // eslint-disable-next-line
  React.useEffect(async () => {
    setSnipping(true);
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    try {
      let response = await topicApi.getList({}, token);
      setCate(response.data.results);
      setSnipping(false);
    } catch (error) {
      console.log(error);
    }
  }, [baseCtx.reload]);

  const children = [];
  cate.map((item) => {
    children.push(<Option key={item.id}>{item.content}</Option>);
  });

  const onFinish = async (values) => {
    const token = sessionStorage.getItem("token");

    console.log(values.post__image)

    var formData = new FormData();

    formData.append("file", values.post__image.file);
    formData.append("title", values.post__title);
    formData.append("summary", values.post__summary);
    formData.append("content", values.post__content);
    formData.append("topic_id", parseInt(values.post__category));

    try {
      let response = await postApi.add(formData, token);

      if (response.status === 201) {
        message.success("T???o c??ng th???c th??nh c??ng!");
        setSnipping(false);
        navigate("/post");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutWrapper>
      <Spin tip="loading..." spinning={snipping}>
        <div className="post__new__wrapper">
          <Form
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Th??? lo???i b??i vi???t"
              name="post__category"
              rules={[
                {
                  required: true,
                  message: "H??y ch???n th??? lo???i cho b??i vi???t trong danh s??ch!",
                },
              ]}
            >
              <Select
                size="large"
                mode="single"
                allowClear
                style={{ width: "30%" }}
                placeholder="Ch???n th??? lo???i b??i vi???t"
                //   defaultValue={["a10", "c12"]}
              >
                {children}
              </Select>
            </Form.Item>

            <Form.Item
              label="Ti??u ????? t??i vi???t (Title)"
              name="post__title"
              rules={[
                {
                  required: true,
                  message: "H??y nh???p ti??u ????? cho b??i vi???t!",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item label="T??m t???t (Summary)" name="post__summary">
              <Input size="large" />
            </Form.Item>

            <Form.Item label="N???i dung (Content)" name="post__content">
              <TextArea rows={15} />
            </Form.Item>

            <Form.Item label="H??nh ???nh minh h???a (Image)" name="post__image">
              <Upload
                fileList={fileList}
                onChange={handleChange}
                beforeUpload={() => false}
              >
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
      </Spin>
    </LayoutWrapper>
  );
}
