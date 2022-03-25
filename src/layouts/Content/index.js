import React from "react";
import { useParams } from "react-router-dom";
import Post from "../Post";
import Aside from "../Aside";
import PostDetail from "../PostDetail";

export default function Content() {
  const { postId } = useParams();
  return (
    <>
      <div className="content-body">
        <div className="container">
          <div className="row">
            {/*List Post*/}
            {postId ? <PostDetail postId={postId}/> : <Post />}

            {/*List Post*/}
            {/*Aside*/}
            <Aside />
          </div>
        </div>
      </div>
    </>
  );
}
