import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Comments from "../components/Comments";
import Search from "../components/Search";

import { getPost } from "../api/posts";
import { getComments } from "../api/comments";

const Post = () => {
  let { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [keyword, setKeyword] = useState(null);

  function handleChange(e) {
    setKeyword(e.target.value);
  }

  function filteredComments(comments, keyword) {
    if (!keyword) return comments;
    return comments.filter(
      ({ body, email, name }) =>
        name.includes(keyword) ||
        email.includes(keyword) ||
        body.includes(keyword)
    );
  }

  useEffect(() => {
    getPost(id)
      .then((response) => {
        setPost(response);
        return getComments(id);
      })
      .then((response) => {
        setComments(response);
      });
  }, []);

  if (!post) return <div>Loading post..</div>;
  if (!comments) return <div>Loading comments..</div>;

  return (
    <div className="container">
      <div className="py-4">
        <Link to="/" className="text-blue-500 hover:text-blue-800">
          Blog
        </Link>{" "}
        <span className="mx-2">></span> <span>{post.title}</span>
      </div>

      <h1 className="capitalize font-black text-2xl mb-8">{post.title}</h1>
      <p className="text-gray-800 leading-7 mb-16">{post.body}</p>

      <Search handleChange={handleChange} />

      <Comments comments={filteredComments(comments, keyword)} />
    </div>
  );
};

export default Post;
