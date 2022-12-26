import React, { useEffect, useState } from "react";

const PaginateButtons = ({ data, getCurrentPage }) => {
  const [totalPages, setTotalPages] = useState(data.total_pages);
  const [currentPage, setCurrentPage] = useState(1);
  let buttons = "";

  if (currentPage === 1) {
    return (
      <div div className="container py-6">
        <button
          onClick={() => {
            setCurrentPage(currentPage + 1);
            getCurrentPage(currentPage + 1);
          }}
          type="button"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          next
        </button>
      </div>
    );
  }
  if (currentPage > 1 && currentPage < totalPages) {
    return (
      <div div className="container py-6">
        <button
          onClick={() => {
            setCurrentPage(currentPage - 1);
            getCurrentPage(currentPage - 1);
          }}
          type="button"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          previous
        </button>
        <button
          onClick={() => {
            setCurrentPage(currentPage + 1);
            getCurrentPage(currentPage + 1);
          }}
          type="button"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          next
        </button>
      </div>
    );
  }
  return (
    <div className="container py-6">
      <button
        onClick={() => {
          setCurrentPage(currentPage - 1);
          getCurrentPage(currentPage - 1);
        }}
        type="button"
        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        previous
      </button>
      <button
        onClick={() => {
          setCurrentPage(currentPage + 1);
          getCurrentPage(currentPage + 1);
        }}
        type="button"
        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        next
      </button>
    </div>
  );
};

//   return <div className="container py-6">{buttons}</div>;

export default PaginateButtons;
