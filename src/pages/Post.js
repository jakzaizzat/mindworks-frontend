import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Comments from "../components/Comments";

import { getPost } from "../api/posts";
import { getComments } from "../api/comments";

const Post = () => {
  let { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPost(id)
      .then((response) => {
        setPost(response);
        return getComments(id);
      })
      .then((response) => {
        setComments(response);
      })
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <div>Loading..</div>;

  return (
    <div className="container">
      {post ? (
        <>
          <div className="py-4">
            <Link to="/" className="text-blue-500 hover:text-blue-800">
              Blog
            </Link>{" "}
            <span className="mx-2">></span> <span>{post.title}</span>
          </div>

          <h1 className="capitalize font-black text-2xl mb-8">{post.title}</h1>
          <p className="text-gray-800 leading-7 mb-16">{post.body}</p>

          <Comments comments={comments} />
        </>
      ) : (
        <div>
          <div className="py-4">
            <Link to="/" className="text-blue-500 hover:text-blue-800">
              Blog
            </Link>{" "}
          </div>
          There is no post with this <strong>{id}</strong>
        </div>
      )}
    </div>
  );
};

export default Post;
