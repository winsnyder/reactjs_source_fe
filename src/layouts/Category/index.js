import React from "react";

export default function Category() {
  return (
    <>
      <div className="single-sidebar-widget post-category-widget">
        <h4 className="single-sidebar-widget__title">Thể loại</h4>
        <ul className="cat-list mt-20">
          <li>
            <a href="#" className="d-flex justify-content-between">
              <p>Thể loại ẩm thực</p>
              <p>(03)</p>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex justify-content-between">
              <p>Đặc sản vùng miền</p>
              <p>(09)</p>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex justify-content-between">
              <p>Món ăn đặc sắc</p>
              <p>(12)</p>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex justify-content-between">
              <p>Thực phẩm sạch</p>
              <p>(02)</p>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex justify-content-between">
              <p>Quầy hàng tiện lợi</p>
              <p>(10)</p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
