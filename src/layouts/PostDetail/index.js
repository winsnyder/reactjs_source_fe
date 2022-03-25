import { Spin } from "antd";
import React from "react";
import { postApi } from "../../services/post.api";

export default function PostDetail(props) {
  const [item, setItem] = React.useState({});
  const [snipping, setSnipping] = React.useState(false);

  React.useEffect(() => {
    (async () => {
        setSnipping(true)
      try {
        let response = await postApi.get(parseInt(props.postId), "");
        setItem(response.data.results);
        setSnipping(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {/*List Post*/}
      <main className="col-md-8">
        <Spin tip="Loading ..." spinning={snipping}>
          <article className="post post-1">
            <header className="entry-header">
              <h1 className="entry-title">{item.title}</h1>
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
              <img
                src={`data:image/png;base64,${item.image}`}
                alt=""
                style={{ width: "100%", height: "100%", marginBottom: 15 }}
              />
              <p>{item.content}</p>
            </div>
          </article>
        </Spin>
      </main>
    </>
  );
}
