import React from "react";
import { Modal, Button, message } from "antd";
import BaseContext from "../../../hooks/context";

import { postApi } from "../../../services/post.api";

export default function PostDetailModal(props) {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [item, setItem] = React.useState({});
  const baseCtx = React.useContext(BaseContext);

  const showModal = async () => {
    const token = sessionStorage.getItem("token");
    try {
      let response = await postApi.get(parseInt(props.post_id), token);
      setItem(response.data.results);
    } catch (error) {
      console.log(error);
    }
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDelete = async () => {
    const token = sessionStorage.getItem("token");
    try {
      await postApi.remove(parseInt(props.post_id), token);
      message.success("Xóa bài viết thành công!")
      baseCtx.changeReload();
      setIsModalVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button onClick={showModal}>Chi tiết</Button>
      <Modal
        title="Chi tiết bài viết"
        visible={isModalVisible}
        onOk={handleCancel}
        onCancel={handleCancel}
        width={1000}
        style={{ minHeight: 300 }}
        bodyStyle={{ overflowY: "scroll" }}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Đóng
          </Button>,
          <Button
            key="delete"
            style={{ float: "left" }}
            type="primary"
            danger
            onClick={handleDelete}
          >
            Xóa Bài Viết
          </Button>,
        ]}
      >
        <p>
          <b>Title</b>: {item.title}
        </p>
        <p>
          <b>Summary</b>: <i>{item.summary}</i>
        </p>
        <img
          src={`data:image/png;base64,${item.image}`}
          alt=""
          style={{ width: "50%", height: "50%", marginBottom: 15 }}
        />
        <h3>Content:</h3>
        <p>{item.content}</p>
      </Modal>
    </>
  );
}
