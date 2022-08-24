import React from "react";

const MainBlock = ({ children, className }) => {
  return (
    <div
      className={`p-10 mb-10 bg-white rounded border-2 border-teal-500 shadow ${className}`}
    >
      {children}
    </div>
  );
};

export default MainBlock;
