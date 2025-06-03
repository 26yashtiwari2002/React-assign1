import React from "react";
import "./Pagination.css";

function Pagination({ currentPage, totalPosts, postsPerPage, paginate }) {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <nav className="pagination">
      <button
        className="page-button"
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ← Prev
      </button>

      <span className="page-info">Page {currentPage}</span>

      <button
        className="page-button"
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next →
      </button>
    </nav>
  );
}

export default Pagination;
