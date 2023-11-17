import React, { useState } from "react";

import { useLoaderData, useNavigate, useLocation } from "react-router-dom";
import { paginationBtns } from "../utils";
const PaginationContainer = () => {
  const {
    meta: { numOfPages: pages, totalNum },
  } = useLoaderData();
  const navigate = useNavigate();

  const { pathname, search } = useLocation();
  const getPage = () => {
    return Number(localStorage.getItem("page")) || 1;
  };
  const storedPage = (num) => {
    localStorage.setItem("page", num);
  };
  const [currentPage, setPage] = useState(getPage());

  const handleChange = (num) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", num);

    navigate(`${pathname}?${searchParams}`);
  };

  return (
    <>
      <div className="px-5 py-8">
        <div className="join">
          <button
            className="join-item btn bg-blue-500 hover:bg-blue-700 text-white"
            onClick={() => {
              let page = currentPage - 1;
              setPage(page);
              if (currentPage === 1) {
                handleChange(currentPage);
              } else {
                storedPage(page);
                handleChange(page);
              }
            }}
          >
            Prev
          </button>
          {paginationBtns(pages).map((btn, index) => {
            return (
              <button
                className={`join-item btn hidden sm:block bg-blue-600 hover:bg-blue-700 text-white ${
                  btn === currentPage ? "bg-secondary" : ""
                }`}
                key={index}
                onClick={() => {
                  setPage(btn);
                  storedPage(btn);
                  handleChange(btn);
                }}
              >
                {btn}
              </button>
            );
          })}
          <button
            className="join-item btn bg-blue-500 hover:bg-blue-700 text-white"
            onClick={() => {
              let page = currentPage + 1;
              setPage(currentPage + 1);
              if (currentPage >= Number(pages)) {
                handleChange(pages);
              } else {
                storedPage(page);
                handleChange(page);
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default PaginationContainer;
