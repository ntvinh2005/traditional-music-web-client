import React, { useEffect, useContext } from "react";
import Markdown from "markdown-to-jsx";
import { useParams } from "react-router-dom";
import { PostContext } from "../../contexts/PostContext";
import "./Post.css";
import Navbar from "../layout/Navbar";

const Post = () => {
  const { postId } = useParams();
  const {
    getPost,
    postState: { posts },
  } = useContext(PostContext);
  useEffect(() => {
    getPost(postId);
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-yellow-50 shadow-lg rounded-lg p-8 pb-12 mb-8 mt-4 md:mx-8">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-yellow-900">
          {posts[0] !== undefined && String(posts[0].title)}
        </h2>
        <br />
        <br />
        <hr />
        <div className="lg:p-12 md:p-10 text-yellow-800">
          {posts[0] !== undefined && (
            <Markdown>{String(posts[0].content)}</Markdown>
          )}
        </div>
      </div>
    </>
  );
};

export default Post;
