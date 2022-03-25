import React from "react";
import { Link } from "react-router-dom";

import { postApi } from "../../services/post.api";
import { topicApi } from "../../services/topic.api";

export default function Aside() {
  const [data, setData] = React.useState([]);
  const [topic, setTopic] = React.useState([]);
  const getDataFilter = async (params) => {
    try {
      let response = await postApi.getList(params, "");
      setData(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataTopic = async () => {
    try {
      let response = await topicApi.getList({}, "");
      setTopic(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line
  React.useEffect(async () => {
    await getDataFilter({});
    await getDataTopic();
  }, []);

  var posts = [];
  data.map((item, idx) => {
    if (idx < 3) {
      posts.push(
        <li>
          <Link style={{ color: "#000" }} to={`/${item.id}`}>
            {item.title}
          </Link>
        </li>
      );
    }
  });

  var topics = [];
  topic.map((item) => {
    topics.push(
      <li>
        <Link style={{ color: "#000" }} to={`/?topic_id=${item.id}`}>
          {item.content}
        </Link>
      </li>
    );
  });
  return (
    <>
      <aside className="col-md-4">
        <div className="widget widget-recent-posts">
          <h3 className="widget-title">Bài Viết Mới Nhất</h3>
          <ul>{posts}</ul>
        </div>
        <div className="widget widget-archives">
          <h3 className="widget-title">Kho Lưu Trữ</h3>
          <ul>
            <li>
              <a href="#">November 2014</a>
            </li>
            <li>
              <a href="#">September 2014</a>
            </li>
            <li>
              <a href="#">January 2013</a>
            </li>
          </ul>
        </div>

        <div className="widget widget-category">
          <h3 className="widget-title">Thể Loại</h3>
          <ul>{topics}</ul>
        </div>
      </aside>
    </>
  );
}
