import React from "react";

import { Link } from "react-router-dom";

const PostList = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Link
          to={"/" + post.id}
          key={post.id}
          className="block p-4 bg-gray-100 rounded-lg mb-4"
        >
          <h2 className="text-xl capitalize font-semibold mb-2">
            {post.title}
          </h2>
          <div className="text-gray-800">{post.body}</div>
        </Link>
      ))}
    </>
  );
};

export default PostList;
