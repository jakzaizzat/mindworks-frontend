import React, { useState } from "react";
import PropTypes from "prop-types";
import Search from "../components/Search";

const Comments = ({ comments }) => {
  const [keyword, setKeyword] = useState(null);

  function handleChange(e) {
    setKeyword(e.target.value);
  }

  function filteredComments(comments, keyword) {
    if (!keyword) return comments;
    return comments.filter(
      ({ body, email, name }) =>
        name.toLowerCase().includes(keyword.toLowerCase()) ||
        email.toLowerCase().includes(keyword.toLowerCase()) ||
        body.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  return (
    <div className="py-8">
      <h3 className="font-semibold mb-4">Comments</h3>

      <div className="mb-4">
        <Search onChange={handleChange} />
      </div>

      {filteredComments(comments, keyword).length < 1 ? (
        <div>There is no comments..</div>
      ) : (
        <>
          {filteredComments(comments, keyword).map((comment) => (
            <div key={comment.id} className="comment first:rounded-lg">
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
        </>
      )}
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
};

export default Comments;
