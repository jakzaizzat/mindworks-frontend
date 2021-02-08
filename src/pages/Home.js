import React from "react";
import PostList from "../components/PostList";

const Home = () => {
  return (
    <div className="container">
      <h1 className="font-black text-2xl mb-8">Blog</h1>
      <PostList />
    </div>
  );
};

export default Home;
