import React from "react";
import _ from "lodash";
import "./pagination.css";

function Pagination({ usersCount, pageSize, onPageChange, currentPage }) {
  const pageCount = Math.ceil(usersCount / pageSize);

  const pages = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={"page_" + page}
            className={"page-item" + (page === currentPage ? " active" : "")}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
