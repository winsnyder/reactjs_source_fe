import React from "react";

export default function Header() {
  return (
    <>
      <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container box_1620">
              <a className="navbar-brand logo_h" href="#">
                <img src="img/logo.png" alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav justify-content-center">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Trang chủ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Kho lưu trữ 
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Thể  loại
                    </a>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Bài viết
                    </a>
                    {/* <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Chi tiết
                        </a>
                      </li>
                    </ul> */}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Phản hồi
                    </a>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right navbar-social">
                  <li>
                    <a href="#">
                      <i className="ti-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-twitter-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-skype"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
