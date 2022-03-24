import React from "react";
import { Link } from "react-router-dom";

import { topicApi } from "../../services/topic.api";

export default function Category() {
  const [cate, setCate] = React.useState([]);
  // eslint-disable-next-line
  React.useEffect(async () => {
    const token = sessionStorage.getItem("token");
    try {
      let response = await topicApi.getList({}, token);
      setCate(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  var contents = [];
  var contents_sub = [];
  cate.map((item) => {
    contents.push(
      <li>
        <Link to={"/"} className="d-flex justify-content-between">
          <p>{item.content}</p>
          <p>(03)</p>
        </Link>
      </li>
    );
    contents_sub.push(
      <li>
        <a href="#">{item.content}</a>
      </li>
    );
  });

  return (
    <>
      <div className="single-sidebar-widget post-category-widget">
        <h4 className="single-sidebar-widget__title">Thể loại</h4>
        <ul className="cat-list mt-20">{contents}</ul>
      </div>

      <div className="single-sidebar-widget tag_cloud_widget">
        <h4 className="single-sidebar-widget__title">Chủ đề yêu thích</h4>
        <ul className="list">{contents_sub}</ul>
      </div>
    </>
  );
}
