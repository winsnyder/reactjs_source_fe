import React from "react";

import { useLocation } from "react-router-dom";

import Category from "../Category";
// import PostRefer from "../PostRefer";
import PostDetail from "../PostDetail";
import LargePost from "../LargePost";

export default function ListPost() {
  const location = useLocation();

  return (
    <>
      <section className="blog-post-area section-margin mt-4">
        <div className="container">
          <div className="row">
            {/*Large Post or Detail Post*/}
            {location.pathname.indexOf("detail") > 1 ? (
              <PostDetail />
            ) : (
              <LargePost />
            )}
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

                <div className="single-sidebar-widget tag_cloud_widget">
                  <h4 className="single-sidebar-widget__title">Chủ đề yêu thích</h4>
                  <ul className="list">
                    <li>
                      <a href="#">Foods & Travel</a>
                    </li>
                    <li>
                      <a href="#">Thực phẩm sạch</a>
                    </li>
                    <li>
                      <a href="#">Shopping</a>
                    </li>
                    <li>
                      <a href="#">travel</a>
                    </li>
                    <li>
                      <a href="#">Vegettable</a>
                    </li>
                    <li>
                      <a href="#">Mua hàng tiện lợi</a>
                    </li>
                    <li>
                      <a href="#">Cửa hàng thông minh</a>
                    </li>
                    <li>
                      <a href="#">Apple & Foods</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
