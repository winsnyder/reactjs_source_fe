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

/*Contact Page*/
import ContactPage from "../../pages/dashboard/contact/contact.list";

export default function RouterDashBoard() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<IndexPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user" element={<UserPage />}></Route>
        <Route path="/user/create" element={<UserInfoPage />}></Route>
        <Route path="/post" element={<PostPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </>
  );
}
