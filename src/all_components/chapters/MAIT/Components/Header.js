import React from "react";
import styles from  "../../../../team/CSS/Header.module.css";

export default function Header() {
  return (
    <div className={styles.Background}>
      <h1 className={styles.Title}>Girl Code It - MAIT</h1>
      <p className={styles.Para}>
        GCI, the official co-ed tech community of MAIT aims to enlighten the programming world to young minds of MAIT with definite and quality sources bringing out the best in students and Institute itself.
        <br />
        <br />
        We as a community believe in rational learning . Thinking of a community open for discussions 24*7 with a zeal to be a better programmer with every passing day? 
        <br />
        <br />
        GCI-MAIT is just one step away!
      </p>
    </div>
  );
}
