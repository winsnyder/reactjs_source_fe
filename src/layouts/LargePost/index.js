import React from "react";

import image_food from "../../assets/images/image.jpg"

export default function LargePost() {
  return (
    <>
      <div className="col-lg-8">
        <div className="single-recent-blog-post">
          <div className="thumb">
            <img className="img-fluid" src={image_food} alt="" />
            <ul className="thumb-info">
              <li>
                <a href="#">
                  <i className="ti-user"></i>Admin
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ti-notepad"></i>January 12,2019
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
            <a href="blog-single.html">
              <h3>
              Xôi Lào.
              </h3>
            </a>
            <p className="tag-list-inline">
              Tag: <a href="#">travel</a>, <a href="#">life style</a>,{" "}
              <a href="#">technology</a>, <a href="#">fashion</a>
            </p>
            <p>
              Over yielding doesn t so moved green saw meat hath fish he him
              from given yielding lesser cattle were fruitful lights. Given let
              have, lesser their made him above gathered dominion sixth.
              Creeping deep said can t called second. Air created seed heaven
              sixth created living
            </p>
            <a className="button" href="#">
              Read More <i className="ti-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <nav className="blog-pagination justify-content-center d-flex">
              <ul className="pagination">
                <li className="page-item">
                  <a href="#" className="page-link" aria-label="Previous">
                    <span aria-hidden="true">
                      <i className="ti-angle-left"></i>
                    </span>
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link" aria-label="Next">
                    <span aria-hidden="true">
                      <i className="ti-angle-right"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
