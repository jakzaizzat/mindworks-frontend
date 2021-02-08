import React, { useState, useEffect } from "react";
import PostList from "../components/PostList";
import { getPosts } from "../api/posts";
import Pagination from "../components/Pagination";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const PAGE_SIZE = 10;

  function handleNextPage() {
    if (pageNumber > 9) return;
    setPageNumber(pageNumber + 1);
  }

  function handlePreviousPage() {
    if (pageNumber < 2) return;
    setPageNumber(pageNumber - 1);
  }

  function paginatePosts(posts, pageNumber) {
    return posts.slice((pageNumber - 1) * PAGE_SIZE, pageNumber * PAGE_SIZE);
  }

  useEffect(() => {
    getPosts().then((response) => setPosts(response));
  }, []);

  return (
    <div className="container">
      <h1 className="font-black text-2xl mb-8">Blog</h1>
      <PostList posts={paginatePosts(posts, pageNumber)} />
      <Pagination
        pageNumber={pageNumber}
        totalPages={PAGE_SIZE}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
    </div>
  );
};

export default Home;
