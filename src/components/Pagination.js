import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ pageNumber, totalPages, onNextPage, onPreviousPage }) => {
  return (
    <div className="flex items-center justify-between py-3">
      {pageNumber > 1 ? (
        <button onClick={onPreviousPage}>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      ) : (
        <div></div>
      )}
      <div>
        {pageNumber} of {totalPages}
      </div>

      {pageNumber < 10 ? (
        <button onClick={onNextPage}>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

Pagination.propTypes = {
  pageNumber: PropTypes.number,
  totalPages: PropTypes.number,
  onNextPage: PropTypes.func,
  onPreviousPage: PropTypes.func,
};

export default Pagination;
