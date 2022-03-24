import React from "react";

import { useParams } from "react-router-dom";

import Category from "../Category";
import Banner from "../Banner";
import Header from "../Header";

import { postApi } from "../../services/post.api";

export default function PostDetail() {
  const { postId } = useParams();
  const [data, setData] = React.useState({});
  // eslint-disable-next-line
  React.useEffect(async () => {
    const token = sessionStorage.getItem("token");
    try {
      let response = await postApi.get(parseInt(postId), token);
      setData(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <Header />
      <Banner />
        <section className="blog-post-area section-margin mt-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="main_blog_details">
                  <img
                    src={`data:image/png;base64,${data.image}`}
                    alt=""
                    className="img-fluid"
                  />
                  <a href="#">
                    <h4>
                      {data.title}
                    </h4>
                  </a>
                  <div className="user_details">
                    <div className="float-left">
                      <a href="#">{data.topic_name}</a>
                      <a href="#">Gadget</a>
                    </div>
                    <div className="float-right mt-sm-0 mt-3">
                      <div className="media">
                        <div className="media-body">
                          <h5>{data.author}</h5>
                          <p>{data.created_at}</p>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <p>
                    <i>{data.summary}</i>
                  </p>
                  <p>
                    {data.content}
                  </p>
                </div>
              </div>
              {/*End Large Post or Detail Post*/}

              {/* {<!-- Start Blog Post Siddebar -->} */}
              <div className="col-lg-4 sidebar-widgets">
                <div className="widget-wrap">
                  {/* <div className="single-sidebar-widget newsletter-widget">
                  <h4 className="single-sidebar-widget__title">Newsletter</h4>
                  <div className="form-group mt-30">
                    <div className="col-autos">
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroup"
                        placeholder="Enter email"
                        // onfocus="this.placeholder =   "
                        // onblur="this.placeholder =  Enter email "
                      />
                    </div>
                  </div>
                  <button className="bbtns d-block mt-20 w-100">
                    Subcribe
                  </button>
                </div> */}
                  {/*Category*/}
                  <Category />

                  {/*End Category*/}

                  {/*Popular Post*/}
                  {/* <PostRefer /> */}
                  {/*End Popular Post*/}
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
