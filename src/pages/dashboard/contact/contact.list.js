import React from "react";
import { useNavigate } from "react-router-dom";
import LayoutWrapper from "../wrapper";
import { Card, Col, Select, Empty, Button, message, Spin } from "antd";

import "../../../assets/styles/style.css";

import { contactApi } from "../../../services/contact.api";

import BaseContext from "../../../hooks/context";

const { Option } = Select;

const { Meta } = Card;

export default function ContactPage() {
  let contents = [];
  const baseCtx = React.useContext(BaseContext);
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [snipping, setSnipping] = React.useState(false);

  function handleChange() {
    baseCtx.changeReload();
  }

  const handleDelete = async (id) => {
    const token = sessionStorage.getItem("token");
    try {
      let response = await contactApi.remove(id, token);
      if (response.status === 200) {
        message.success("Xóa phản hồi thành công!");
        baseCtx.changeReload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line
  React.useEffect(async () => {
    setSnipping(true)
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    try {
      let response = await contactApi.getList({}, token);
      setData(response.data.results);
      setSnipping(false)
    } catch (error) {
      console.log(error);
    }
  }, [baseCtx.reload]);

  for (let i = 0; i < data.length; i++) {
    contents.push(
      <Col span={7} style={{ margin: 10 }}>
        <Card
          className="card__wrapper"
          title={`Thời gian: ${data[i].created_at}`}
          bordered={true}
        >
          <p>Nội dung: {data[i].content}</p>
          <p>Người tạo: {data[i].fullname}</p>
          <p>Số điện thoại liên hệ: {data[i].phone}</p>
          <Meta
            style={{ textAlign: "right" }}
            description={
              <Button
                type="primary"
                danger
                onClick={() => handleDelete(data[i].id)}
              >
                Delete
              </Button>
            }
          />
        </Card>
      </Col>
    );
  }

  return (
    <LayoutWrapper>
      <Spin tip="loading..." spinning={snipping}>
        <div className="list__card__header ">Bộ lọc (Filter)</div>
        <div className="select__category">
          <Select
            size="large"
            mode="single"
            allowClear
            style={{ width: "30%" }}
            placeholder="Lọc Theo thời gian"
            //   defaultValue={["a10", "c12"]}
            onChange={handleChange}
          >
            <Option value="jack">Mới Nhất</Option>
            <Option value="lucy">Trong Ngày</Option>
            <Option value="tom">Tuần Trước</Option>
          </Select>
        </div>
        <div className="site-card-wrapper">
          <div className="list__card__header">Danh sách phản hồi</div>
          <div className="list__card__template">
            {contents.length != 0 ? (
              contents
            ) : (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="Không phản hồi nào được tìm thấy?"
              />
            )}
          </div>
        </div>
      </Spin>
    </LayoutWrapper>
  );
}
