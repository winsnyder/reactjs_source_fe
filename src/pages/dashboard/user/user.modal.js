import React, { useState } from "react";
import { Modal, Button } from "antd";
import { DeleteOutlined, DashOutlined } from "@ant-design/icons";

export const UserDeleteModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
        style={{ marginRight: 10 }}
        onClick={showModal}
        icon={<DeleteOutlined />}
      />
      <Modal
        title="Warning!!!"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p style={{ textAlign: "center" }}>
          Xác nhận xóa user : <b>thang.buingoc</b>. Bạn thực sự muốn xóa user
          này khỏi hệ thống?
        </p>
      </Modal>
    </>
  );
};

export const UserActiveModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      <Button icon={<DashOutlined />} onClick={showModal} />
      <Modal
        title="Warning!!!"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p style={{ textAlign: "center" }}>
          Xác nhận <b>Active</b> user : <b>thang.buingoc</b>.
        </p>
      </Modal>
    </>
  );
};
