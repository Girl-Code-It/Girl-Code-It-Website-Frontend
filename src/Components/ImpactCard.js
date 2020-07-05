import React from "react";
import styles from "../Css/Impact.module.css";

export default function ImpactCard(props) {
  return (
    <div className={`col-sm-12 col-md-12 col-lg-6`}>
      <div className={`card ${styles.one}`}>
        <div className={`card-block`}>
          <div className={`${styles.left}`}>
            <img data-assetindex="2" src={props.impact.imgUrl} alt="image1" />
          </div>
          <div className={`${styles.right}`}>
            <h1>{props.impact.name}</h1>
            <hr />
            <p style={{ paddingBottom: "30px" }}>
              {props.impact.para1} <br />
              {props.impact.para2}
            </p>
            <a href="#" className={`btn`}>
              Know More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
