import React from "react";
import { useNavigate } from "react-router-dom";
import LayoutWrapper from "../wrapper";
import { Button, Card, Col, Row, Select, Input, Empty } from "antd";

import "../../../assets/styles/style.css";
import post from "../../../assets/images/post.jpeg";

const { Option } = Select;
const { Search } = Input;
const { Meta } = Card;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default function PostPage() {
  const navigate = useNavigate();
  let contents = [];

  for (let i = 0; i < 5; i++) {
    contents.push(
      <Row gutter={16} style={{ marginBottom: 15 }} key={i}>
        <Col span={8}>
          <Card
            className="card__wrapper"
            title="Thể  loại"
            extra={<Button>Chi tiết</Button>}
            bordered={true}
          >
            <p>Tiêu đề bài viết</p>
            <img
              src={post}
              alt=""
              style={{ width: "100%", height: "100%", marginBottom: 15 }}
            />
            <Meta title="Summary bài biết" description="tác giả" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            className="card__wrapper"
            title="Thể  loại"
            extra={<Button>Chi tiết</Button>}
            bordered={true}
          >
            <p>Tiêu đề bài viết</p>
            <img
              src={post}
              alt=""
              style={{ width: "100%", height: "100%", marginBottom: 15 }}
            />
            <Meta title="Summary bài biết" description="tác giả" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            className="card__wrapper"
            title="Thể  loại"
            extra={<Button>Chi tiết</Button>}
            bordered={true}
          >
            <p>Tiêu đề bài viết</p>
            <img
              src={post}
              alt=""
              style={{ width: "100%", height: "100%", marginBottom: 15 }}
            />
            <Meta title="Summary bài biết" description="tác giả" />
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
          mode="multiple"
          allowClear
          style={{ width: "30%" }}
          placeholder="Lọc Theo thể loại bài viết"
          //   defaultValue={["a10", "c12"]}
          onChange={handleChange}
        >
          {children}
        </Select>
        <Button
          style={{ float: "right" }}
          type="primary"
          onClick={() => navigate("/post/new")}
        >
          Tạo mới bài viết
        </Button>
      </div>
      <div className="filter__post">
        <Search
          placeholder="Tìm kiếm theo tên, chủ đề của bài viết"
          size="large"
          style={{ width: "30%" }}
        />
      </div>
      <div className="site-card-wrapper">
        <div className="list__card__header">Danh sách bài viết</div>
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
