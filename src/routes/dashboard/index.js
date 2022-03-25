import React from "react";
import { Routes, Route } from "react-router-dom";

/*Login Page*/
import Login from "../../pages/dashboard/authen/authen.page";
/*Index Page*/
import IndexPage from "../../pages/dashboard";
/*User Page*/
import UserPage from "../../pages/dashboard/user/user.list";
import UserInfoPage from "../../pages/dashboard/user/user.info";
/*Post Page*/
import PostPage from "../../pages/dashboard/post/post.list";
import PostNewPage from "../../pages/dashboard/post/post.new";

/*Contact Page*/
import ContactPage from "../../pages/dashboard/contact/contact.list";

import Overview from "../../pages/ui/Overview";
import AboutPage from "../../pages/ui/About";
import FeedBackPage from "../../pages/ui/Contact";

export default function RouterDashBoard() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Overview />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/:postId" element={<Overview />}></Route>
        <Route path="/feedback" element={<FeedBackPage />}></Route>
        <Route path="/dashboard" element={<IndexPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user" element={<UserPage />}></Route>
        <Route path="/user/create" element={<UserInfoPage />}></Route>
        <Route path="/post" element={<PostPage />}></Route>
        <Route path="/post/new" element={<PostNewPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </>
  );
}
