import React from "react";

export default function PostRefer() {
  return (
    <>
      <div className="single-sidebar-widget popular-post-widget">
        <h4 className="single-sidebar-widget__title">Popular Post</h4>
        <div className="popular-post-list">
          <div className="single-post-list">
            <div className="thumb">
              <img
                className="card-img rounded-0"
                src="img/blog/thumb/thumb1.png"
                alt=""
              />
              <ul className="thumb-info">
                <li>
                  <a href="#">Adam Colinge</a>
                </li>
                <li>
                  <a href="#">Dec 15</a>
                </li>
              </ul>
            </div>
            <div className="details mt-20">
              <a href="blog-single.html">
                <h6>Accused of assaulting flight attendant miktake alaways</h6>
              </a>
            </div>
          </div>
          <div className="single-post-list">
            <div className="thumb">
              <img
                className="card-img rounded-0"
                src="img/blog/thumb/thumb2.png"
                alt=""
              />
              <ul className="thumb-info">
                <li>
                  <a href="#">Adam Colinge</a>
                </li>
                <li>
                  <a href="#">Dec 15</a>
                </li>
              </ul>
            </div>
            <div className="details mt-20">
              <a href="blog-single.html">
                <h6>Tennessee outback steakhouse the worker diagnosed</h6>
              </a>
            </div>
          </div>
          <div className="single-post-list">
            <div className="thumb">
              <img
                className="card-img rounded-0"
                src="img/blog/thumb/thumb3.png"
                alt=""
              />
              <ul className="thumb-info">
                <li>
                  <a href="#">Adam Colinge</a>
                </li>
                <li>
                  <a href="#">Dec 15</a>
                </li>
              </ul>
            </div>
            <div className="details mt-20">
              <a href="blog-single.html">
                <h6>Tennessee outback steakhouse the worker diagnosed</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
