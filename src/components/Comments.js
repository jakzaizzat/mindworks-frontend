import React from "react";

const Comments = () => {
  return (
    <div className="py-8">
      <h3 className="font-semibold mb-4">Comments</h3>
      <div className="first:rounded-lg">
        <div className="border border-gray-200  p-4 text-gray-800 first:rounded-lg">
          <div className="mb-2 whitespace-pre-wrap">
            laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora
            quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam
            sapiente accusantium
          </div>
          <div className="text-sm text-gray-500">
            id labore ex et quam laborum -{" "}
            <a href="mailto:email@example.com" className="text-blue-400">
              Eliseo@gardner.biz
            </a>
          </div>
        </div>

        <div className="border border-gray-200 p-4 text-gray-800">
          <div className="mb-2 whitespace-pre-wrap">
            laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora
            quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam
            sapiente accusantium
          </div>
          <div className="text-sm text-gray-500">
            id labore ex et quam laborum -{" "}
            <a href="mailto:email@example.com" className="text-blue-400">
              Eliseo@gardner.biz
            </a>
          </div>
        </div>

        <div className="border border-gray-200 p-4 text-gray-800">
          <div className="mb-2 whitespace-pre-wrap">
            laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora
            quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam
            sapiente accusantium
          </div>
          <div className="text-sm text-gray-500">
            id labore ex et quam laborum -{" "}
            <a href="mailto:email@example.com" className="text-blue-400">
              Eliseo@gardner.biz
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
