import React from "react";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="container">
        <header id="site-header">
          <div className="row">
            <div className="col-md-4 col-sm-5 col-xs-8">
              <div className="logo">
                <h1>
                  <Link to="">
                    <b>Foods</b> &amp; Funny
                  </Link>
                </h1>
              </div>
            </div>
            <div className="col-md-8 col-sm-7 col-xs-4">
              <nav className="main-nav" role="navigation">
                <div className="navbar-header">
                  <button
                    type="button"
                    id="trigger-overlay"
                    className="navbar-toggle"
                  >
                    <span className="ion-navicon"></span>
                  </button>
                </div>

                <div
                  className="collapse navbar-collapse"
                  id="bs-example-navbar-collapse-1"
                >
                  <ul className="nav">
                    <li className="cl-effect-11">
                      <Link to="/">Ẩm Thực & Công Thực</Link>
                    </li>
                    <li className="cl-effect-11">
                      <Link to="">Blog</Link>
                    </li>
                    <li className="cl-effect-11">
                      <Link to="/about">Về Chúng Tôi</Link>
                    </li>
                    <li className="cl-effect-11">
                      <Link to="/feedback">Phản Hồi</Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <div id="header-search-box">
                <Link id="search-menu" to="">
                  <span
                    id="search-icon"
                    className="ion-ios-search-strong"
                  ></span>
                </Link>
                <div id="search-form" className="search-form">
                  <form role="search" method="get" id="searchform" action="#">
                    <input type="search" placeholder="Search" required />
                    <button type="submit">
                      <span className="ion-ios-search-strong"></span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
