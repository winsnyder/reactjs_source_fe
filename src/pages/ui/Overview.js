import React from "react";
import Banner from "../../layouts/Banner";
import CategorySlide from "../../layouts/CategorySlide";
import Header from "../../layouts/Header";

export default function Overview() {
  return (
    <>
      <Header />
      <main className="site-main">
        <Banner />
        <CategorySlide />
      </main>
    </>
  );
}
