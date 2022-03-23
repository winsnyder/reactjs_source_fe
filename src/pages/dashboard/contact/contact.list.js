import React from "react";
import LayoutWrapper from "../wrapper";
import { Card, Col, Row, Select, Empty, Button } from "antd";

import "../../../assets/styles/style.css";

import { contactApi } from "../../../services/contact.api";

const { Option } = Select;

const { Meta } = Card;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default function ContactPage() {
  let contents = [];
  const [data, setData] = React.useState([])

  React.useEffect(async () => {
    let response = await contactApi.getList({}, token)

  }, [])


  for (let i = 0; i < 1; i++) {
    contents.push(
      <Row gutter={16} style={{ marginBottom: 15 }} key={i}>
        <Col span={6}>
          <Card className="card__wrapper" title="Time:" bordered={true}>
            <p>Nội dung phản hồi</p>
            <Meta
              style={{ textAlign: "right" }}
              description={
                <Button type="primary" danger>
                  Delete
                </Button>
              }
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card className="card__wrapper" title="Time:" bordered={true}>
            <p>Nội dung phản hồi</p>
            <Meta
              style={{ textAlign: "right" }}
              description={
                <Button type="primary" danger>
                  Delete
                </Button>
              }
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card className="card__wrapper" title="Time:" bordered={true}>
            <p>Nội dung phản hồi</p>
            <Meta
              style={{ textAlign: "right" }}
              description={
                <Button type="primary" danger>
                  Delete
                </Button>
              }
            />
          </Card>
        </Col>
      </Row>
    );
  }

  return (
    <LayoutWrapper>
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
          {children}
        </Select>
      </div>
      <div className="site-card-wrapper">
        <div className="list__card__header">Danh sách phản hồi</div>
        {contents.length != 0 ? (
          contents
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="Không bài viết nào được tìm thấy?"
          />
        )}
      </div>
    </LayoutWrapper>
  );
}
