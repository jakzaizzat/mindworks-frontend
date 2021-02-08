import React from "react";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";
import Search from "../components/Search";

const Post = () => {
  let { id } = useParams();
  const text =
    "quia et suscipit\nsuscipit recusandae consequuntur expedita etcum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autemsunt rem eveniet architecto";

  const parseText = text.replace(/(?:\r\n|\r|\n)/g, " <br/> ");
  return (
    <div className="container">
      <h1 className="capitalize font-black text-2xl mb-8">
        sunt aut facere repellat provident occaecati excepturi optio
        reprehenderit {id}
      </h1>
      <p className="text-gray-800 leading-7 mb-16">{parseText}</p>

      <Search />

      <Comments />
    </div>
  );
};

export default Post;
