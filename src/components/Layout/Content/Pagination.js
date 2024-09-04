import { PaginationItem } from "@mui/material";
import React from "react";
import { usePagination } from "../../_hooks/usePagination";
import PaginationBlock from "@mui/material/Pagination";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Pagination = (props) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className="flex justify-center">
      <PaginationBlock
        shape="rounded"
        size="small"
        count={lastPage}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
        onChange={(e, page) => onPageChange(page)}
      />
    </div>
  );
};

export default Pagination;
