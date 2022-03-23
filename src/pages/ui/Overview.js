import React from "react";
import Banner from "../../layouts/Banner";
// import CategorySlide from "../../layouts/CategorySlide";
import ListPost from "../../layouts/ListPost";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

export default function Overview() {
  return (
    <>
      <Header />
      <main className="site-main">
        <Banner />
        <ListPost />
        <Footer />
      </main>
    </>
  );
}
