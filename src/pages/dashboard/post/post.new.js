import React from "react";
import { useParams } from "react-router-dom";
import LayoutWrapper from "../wrapper";

export default function PostNewPage() {
  const { postId } = useParams();
  return <LayoutWrapper>Post New Page - {postId}</LayoutWrapper>;
}
