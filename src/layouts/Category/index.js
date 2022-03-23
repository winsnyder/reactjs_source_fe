import React from "react";

export default function Category() {
  return (
    <>
      <div className="single-sidebar-widget post-category-widget">
        <h4 className="single-sidebar-widget__title">Catgory</h4>
        <ul className="cat-list mt-20">
          <li>
            <a href="#" className="d-flex justify-content-between">
              <p>Technology</p>
              <p>(03)</p>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex justify-content-between">
              <p>Software</p>
              <p>(09)</p>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex justify-content-between">
              <p>Lifestyle</p>
              <p>(12)</p>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex justify-content-between">
              <p>Shopping</p>
              <p>(02)</p>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex justify-content-between">
              <p>Food</p>
              <p>(10)</p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
