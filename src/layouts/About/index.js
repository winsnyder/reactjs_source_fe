import React from "react";

import food from "../../assets/images/food.jpg"

export default function About() {
  return (
    <>
      <div className="content-body">
        <div className="container">
          <div className="row">
            <main className="col-md-12">
              <h1 className="page-title">Giới Thiệu Chung</h1>
              <article className="post">
                <div className="entry-content clearfix">
                  <figure className="img-responsive-center">
                    <img
                      className="img-responsive"
                      src={food}
                      alt="Developer Image"
                    />
                  </figure>
                  <p>
                   Là một trong những địa chỉ cung cấp thông tin uy tín đảm bảo về các loại thực phẩm sạch, chất lượng
                   cao trên thị trường. Ngoài việc cung cấp thông tin thực phẩm đảm bảo và các công thực chế biến các loại
                   thực phẩm để tạo ra được món ngon, chuẩn vị nhất.
                  </p>
                  <p>
                    Với đội ngũ nhà phát triển luôn luôn tìm cách nâng cao dịch vụ trải nghiệm
                    tới người dùng, luôn tìm giải pháp hướng tới lợi ích của đọc giả, Với mong muốn
                    tạo được lợi ích cộng đồng cùng nhau hướng tới loại bỏ thực phẩm bẩn và kém
                    chất lượng trôi nổi trên thị trường.
                  </p>
                  <div className="height-40px"></div>
                  <h2 className="title text-center">Social</h2>
                  <ul className="social">
                    <li className="facebook">
                      <a href="#">
                        <span className="ion-social-facebook"></span>
                      </a>
                    </li>
                    <li className="twitter">
                      <a href="#">
                        <span className="ion-social-twitter"></span>
                      </a>
                    </li>
                    <li className="google-plus">
                      <a href="#">
                        <span className="ion-social-googleplus"></span>
                      </a>
                    </li>
                    <li className="tumblr">
                      <a href="#">
                        <span className="ion-social-tumblr"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
