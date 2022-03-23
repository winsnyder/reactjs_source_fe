import React, { useState } from "react";
import { Modal, Button, message } from "antd";
import { DeleteOutlined, DashOutlined } from "@ant-design/icons";

import { userApi } from "../../../services/user.api";

import BaseContext from "../../../hooks/context";

export const UserDeleteModal = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const baseCtx = React.useContext(BaseContext);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    // Handle delete user
    const token = sessionStorage.getItem("token")
    try {
      let response = await userApi.remove(parseInt(props.id), token);
      if (response.status == 200) {
        message.success("Bạn đã xóa thành công!")
        setIsModalVisible(false);
        baseCtx.changeReload();
      }
    } catch (error) {
      message.error(
        "Xóa user không thành công. Vui lòng kiểm tra lại kết nối!"
      );
      setIsModalVisible(false);
    }
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
          Xác nhận xóa user : <b>{props.name}</b>. Bạn thực sự muốn xóa user
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

  const handleOk = async () => {
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
