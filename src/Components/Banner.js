import React from "react";
import styles from "../Css/Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.App}>
      <div className={styles.main}>
        <div className={styles.head}>
          Give wings to
          <br />
          your <span className={styles.dreams}>dreams</span>
          <hr className={styles.hr} />
          <button className={`border-0 ${styles.btn1}`}>About Us</button>
          <button className={`border-0 ${styles.btn2}`}>
            Join Our Community
          </button>
        </div>
        <div className={styles.main}>
          <img
            className={styles.code}
            data-assetindex="0"
            src="./code.svg"
            alt="code"
          />

          <img
            className={styles.girl}
            data-assetindex="1"
            src="./girl.svg"
            alt="girl"
          />
        </div>
      </div>
    </div>
  );
}
