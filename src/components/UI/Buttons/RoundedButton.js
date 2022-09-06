import React from "react";
import styles from "./RoundedButton.module.css";

const RoundedButton = ({ children, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={`${className} ${styles["rounded-button"]}`}
    >
      {children}
    </div>
  );
};

export default RoundedButton;
