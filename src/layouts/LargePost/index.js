
import React from "react";

import BaseContext from "../../hooks/context";

import { postApi } from "../../services/post.api";

import { Spin } from "antd";
import { Link } from "react-router-dom";

export default function LargePost() {
  const baseCtx = React.useContext(BaseContext);
  const [snipping, setSnipping] = React.useState(false);
  const [data, setData] = React.useState([]);
  const getDataFilter = async (params) => {
    setSnipping(true);
    const token = sessionStorage.getItem("token");
    try {
      let response = await postApi.getList(params, token);
      setData(response.data.results);
      setSnipping(false);
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line
  React.useEffect(async () => {
    await getDataFilter({});
  }, [baseCtx.reload]);

  var contents = [];
  data.map((item) => {
    contents.push(
      <div className="single-recent-blog-post">
        <div className="thumb">
          <img
            src={`data:image/png;base64,${item.image}`}
            alt=""
            className="img-fluid"
          />
          <ul className="thumb-info">
            <li>
              <a href="#">
                <i className="ti-user"></i>{item.author}
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ti-notepad"></i>
                {item.created_at}
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ti-themify-favicon"></i>2 Comments
              </a>
            </li>
          </ul>
        </div>
        <div className="details mt-20">
          <a href="#">
            <h3>{item.title}</h3>
          </a>
          <p className="tag-list-inline">
            Tag: <a href="#">{item.topic_name}</a>{" "}
          </p>
          <p>{item.summary}</p>
          <Link to={`/${item.id}`} className="button" href="#">
            Đọc thêm <i className="ti-arrow-right"></i>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="col-lg-8">
        <Spin tip="Loading..." spinning={snipping}>
        {contents}
        </Spin>
      </div>
    </>
  );
}
