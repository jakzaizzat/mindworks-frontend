import React, { useState, useEffect } from "react";
import PostList from "../components/PostList";
import { getPosts } from "../api/posts";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((response) => setPosts(response));
  }, []);

  return (
    <div className="container">
      <h1 className="font-black text-2xl mb-8">Blog</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
