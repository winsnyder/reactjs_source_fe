import { Empty, Spin } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { postApi } from "../../services/post.api";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function Post() {
  let query = useQuery();
  const [snipping, setSnipping] = React.useState(false);
  const [data, setData] = React.useState([]);
  const getDataFilter = async (params) => {
    setSnipping(true);
    try {
      let response = await postApi.getList(params, "");
      setData(response.data.results);
      setSnipping(false);
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line
  React.useEffect(async () => {
    await getDataFilter({ topic_id: query.get("topic_id") });
  }, [query.get("topic_id")]);

  var contents = [];

  if (data.length === 0) {
    contents.push(<Empty description="Không có bài viết" />);
  }

  data.map((item) => {
    contents.push(
      <article className="post post-1">
        <header className="entry-header">
          <h1 className="entry-title">
            <a href="#" style={{ color: "#000" }}>
              {item.title}
            </a>
          </h1>
          <div className="entry-meta">
            <span className="post-category">
              <a href="#">{item.topic_name}</a>
            </span>

            <span className="post-date">
              <a href="#">
                <time className="entry-date">{item.created_at}</time>
              </a>
            </span>

            <span className="post-author">
              <a href="#">{item.author}</a>
            </span>

            <span className="comments-link">
              <a href="#">4 Comments</a>
            </span>
          </div>
        </header>
        <div className="entry-content clearfix">
          <p>{item.summary}</p>
          <div className="read-more cl-effect-14">
            <Link
              to={`/${item.id}`}
              className="more-link"
              style={{ color: "#000" }}
            >
              Đọc chi tiết <span className="meta-nav">→</span>
            </Link>
          </div>
        </div>
      </article>
    );
  });

  return (
    <main className="col-md-8">
      <Spin tip="Loading ..." spinning={snipping}>
        {contents}
      </Spin>
    </main>
  );
}
