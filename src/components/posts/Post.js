import React, { useEffect, useContext } from "react";
import Markdown from "markdown-to-jsx";
import { useParams } from "react-router-dom";
import { PostContext } from "../../contexts/PostContext";
import "./Post.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

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
      <br />
      <br />
      <div className="bg-yellow-50 shadow-lg rounded-lg mb-8 mt-4 md:mx-8">
        {posts[0] !== undefined && (
          <div className="mx-auto md:p-6 sm:p-0 rounded-lg">
            <video controls className="w-full h-auto rounded-lg">
              <source src={posts[0].videoUrl}/>
            </video>
          </div>
        )}
        <div className="p-8 pb-12">
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
      </div>
      <Footer/>
    </>
  );
};

export default Post;
