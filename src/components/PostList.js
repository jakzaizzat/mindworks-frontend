import React from "react";

import { Link } from "react-router-dom";

const PostList = () => {
  return (
    <>
      <Link to={"/" + 1} className="block p-4 bg-gray-100 rounded-lg mb-4">
        <h2 className="text-xl capitalize font-semibold mb-2">
          sunt aut facere repellat provident occaecati excepturi optio
          reprehenderit
        </h2>
        <div className="text-gray-800">
          quia et suscipit\nsuscipit recusandae consequuntur expedita et
          cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem
          sunt rem eveniet architecto
        </div>
      </Link>
      <Link to={"/" + 2} className="block p-4 bg-gray-100 rounded-lg mb-4">
        <h2 className="text-xl capitalize font-semibold mb-2">
          sunt aut facere repellat provident occaecati excepturi optio
          reprehenderit
        </h2>
        <div className="text-gray-800">
          quia et suscipit\nsuscipit recusandae consequuntur expedita et
          cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem
          sunt rem eveniet architecto
        </div>
      </Link>
    </>
  );
};

export default PostList;
