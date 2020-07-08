import React from "react";
import styles from "../Css/CodeMap.module.css";

export default function CodeMapCard(props) {
  return (
    <div>
      
      <div className="col-sm-12 col-md-6">
        <div className={styles.card}>
          <p className={styles.cardHeader} />
          <div className={styles.cardBody}>
            <img className={styles.img} src={props.codeMap.imgUrl} alt="" />

            <h2 className={styles.cardText}>{props.codeMap.name}</h2>
            <button href="#" className={styles.btn}>
              {" "}
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
