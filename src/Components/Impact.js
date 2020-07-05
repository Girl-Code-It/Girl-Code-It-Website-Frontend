import React, { Component } from "react";
import ImpactCard from "./ImpactCard";
import styles from "../Css/Impact.module.css";

export default class Impact extends Component {
  render() {
    return (
      <div>
        <div className={`container padding`}>
          <div
            className={`text-center ${styles.welcome}`}
            style={{ width: "100%" }}
          >
            <h1>
              How are we creating an{" "}
              <span style={{ color: "rgb(0, 141, 200)" }}>Impact</span>?
            </h1>
          </div>
        </div>
        <div className={`container`}>
          <div className={`row`}>
            <ImpactCard
              impact={{
                name: "Opportunity Calendar",
                imgUrl: "image1.svg",
                para1: "Know right Opportunities",
                para2: "at right time!"
              }}
            />
            <ImpactCard
              impact={{
                name: "CodeMaps",
                imgUrl: "image2.svg",
                para1: "Learn everything the",
                para2: "right way!"
              }}
            />

            <hr />
          </div>
        </div>
      </div>
    );
  }
}
