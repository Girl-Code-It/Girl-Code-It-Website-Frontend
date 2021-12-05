import React from "react";
import styles from "../CSS/Header.module.css";

export default function Header() {
  return (
    // <div className={styles.Background}>
      <h1 className={styles.Title}>
        Our {' '} 
        <span style = {{color: "#008cd8"}}>
          Events
        </span>
      </h1>
    // </div>
  );
}
