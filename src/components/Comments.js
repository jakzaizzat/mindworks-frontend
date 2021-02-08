import React from "react";

const Comments = ({ comments }) => {
  return (
    <div className="py-8">
      <h3 className="font-semibold mb-4">Comments</h3>

      {comments.length < 1 && <div>There is no comments..</div>}

      {comments.map((comment) => (
        <div key={comment.id} className="first:rounded-lg">
          <div className="border border-gray-200  p-4 text-gray-800 first:rounded-lg">
            <div className="mb-2 whitespace-pre-wrap">{comment.body}</div>
            <div className="text-sm text-gray-500">
              {comment.name} -{" "}
              <a href={"mailto:" + comment.email} className="text-blue-400">
                {comment.email}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
