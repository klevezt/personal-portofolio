import React from "react";
import { usePagination, DOTS } from "../../_hooks/usePagination";
import styles from "./pagination.css";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination m-0 flex justify-center">
        <li className="page-item" onClick={onPrevious}>
          <button className="page-link">
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return <li className={styles["page-item"]}>&#8230;</li>;
          }

          return (
            <li
              className={styles["page-item"]}
              onClick={() => onPageChange(pageNumber)}
            >
              <button className="page-link"> {pageNumber}</button>
            </li>
          );
        })}
        <li className={styles["page-item"]} onClick={onNext}>
          <button className="page-link">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
