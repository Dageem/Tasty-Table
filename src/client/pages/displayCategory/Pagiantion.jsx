import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center mt-4">
      <ul className="flex items-center">
        <li className={`page-item ${currentPage === 1 ? "opacity-50" : ""}`}>
          <button
            className="page-link bg-blue-600 text-white rounded-md px-2 py-1 hover:bg-blue-400"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        <li className="page-item">
          <p className="page-text mx-4">
            Page {currentPage} of {totalPages}
          </p>
        </li>
        <li
          className={`page-item ${
            currentPage === totalPages ? "opacity-50" : ""
          }`}
        >
          <button
            className="page-link bg-blue-600 text-white rounded-md px-2 py-1 hover:bg-blue-400"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
