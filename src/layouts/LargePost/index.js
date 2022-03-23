import React from "react";

import image_food from "../../assets/images/nom.jpg"
import image_salad from "../../assets/images/salad.jpg"
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
              Nộm đu đủ (Tam Mak Hoong)
              </h3>
            </a>
            <p className="tag-list-inline">
              Tag: <a href="#">foods</a>, <a href="#">life style</a>,{" "}
            </p>
            <p>
            Nguyên liêu chính của món ăn là đu đủ chưa chín. Nó có nguồn gốc từ Lào, nhưng được kết hợp với nhiều loại nguyên liệu khác nhau tuỳ theo từng vùng. 
            </p>
            <a className="button" href="#">
              Đọc thêm <i className="ti-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="single-recent-blog-post">
          <div className="thumb">
            <img className="img-fluid" src={image_salad} alt="" />
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
              Salad cơm chiên giòn (Naem Khao Tod)
              </h3>
            </a>
            <p className="tag-list-inline">
              Tag: <a href="#">foods</a>, <a href="#">life style</a>,{" "}
            </p>
            <p>
            Naem Khao Tod là một món salad tươi sống từ nơi này được làm từ cơm nắm chiên giòn, những miếng xúc xích heo chua, đậu phộng, dừa nạo, nước mắm, ớt khô và các nguyên liệu khác.
            </p>
            <a className="button" href="#">
              Đọc thêm <i className="ti-arrow-right"></i>
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
