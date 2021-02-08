import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center">
      <p className="text-3xl font-bold mb-3">Page Not found</p>
      <Link to="/" className="text-blue-400 hover:text-blue-800">
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
