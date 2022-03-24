import React from "react";
import { Routes, Route } from "react-router-dom";
import Overview from "../../pages/ui/Overview";
import PostDetail from "../../layouts/PostDetail";

export default function RouterUI() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Overview />}></Route>
        <Route path="/:postId" element={<PostDetail />}></Route>
      </Routes>
    </>
  );
}
