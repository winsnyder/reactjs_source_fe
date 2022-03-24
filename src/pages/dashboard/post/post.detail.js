import React from "react";
import { Modal, Button } from "antd";

import { postApi } from "../../../services/post.api";

export default function PostDetailModal(props) {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [item, setItem] = React.useState({});

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
