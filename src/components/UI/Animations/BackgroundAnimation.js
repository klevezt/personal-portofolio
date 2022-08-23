import React from "react";
import styles from "./BackgroundAnimation.module.css";

const BackgroundAnimation = () => {
  return (
    <section id={styles["bg"]}>
      <ul id={styles["shape"]}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
};

export default BackgroundAnimation;
