import React from "react";
import { useNavigate } from "react-router-dom";
import BaseContext from "../../../hooks/context";
import LayoutWrapper from "../wrapper";
import { Button, Card, Col, Select, Input, Empty, Spin } from "antd";

import "../../../assets/styles/style.css";

import CreateCategoryModal from "./post.modal.category";

import { postApi } from "../../../services/post.api";
import { topicApi } from "../../../services/topic.api";
import PostDetailModal from "./post.detail";

const { Option } = Select;
const { Search } = Input;
const { Meta } = Card;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default function PostPage() {
  const baseCtx = React.useContext(BaseContext);
  const navigate = useNavigate();
  const [snipping, setSnipping] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [cate, setCate] = React.useState([]);
  let contents = [];

  // eslint-disable-next-line
  React.useEffect(async () => {
    setSnipping(true);
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    try {
      let response = await postApi.getList({}, token);
      setData(response.data.results);
      setSnipping(false);
    } catch (error) {
      console.log(error);
    }
  }, [baseCtx.reload]);

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

  data.map((item) => {
    contents.push(
      <Col span={7} style={{ margin: 20 }}>
        <Card
          className="card__wrapper"
          title={
            <>
              Thể loại <b>{item.topic_name}</b>
            </>
          }
          extra={<PostDetailModal post_id={item.id}/>}
          bordered={true}
        >
          <p>Tiêu đề : {item.title}</p>
          <img
            src={`data:image/png;base64,${item.image}`}
            alt=""
            style={{ width: "100%", height: "100%", marginBottom: 15 }}
          />
          <Meta
            title={`Tóm tắt: ${item.summary ? item.summary : ""}`}
            description={`Tác giả: ${item.author}`}
          />
        </Card>
      </Col>
    );
  });

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
            placeholder="Lọc Theo thể loại bài viết"
            //   defaultValue={["a10", "c12"]}
            onChange={handleChange}
          >
            {children}
          </Select>
          <CreateCategoryModal />
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
          <div className="list__card__template">
            {contents.length != 0 ? (
              contents
            ) : (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="Không bài viết nào được tìm thấy?"
              />
            )}
          </div>
        </div>
      </Spin>
    </LayoutWrapper>
  );
}
