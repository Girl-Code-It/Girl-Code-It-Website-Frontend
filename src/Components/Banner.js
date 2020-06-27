import React from "react";
import "./Css/Banner.module.css";

export default function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="head">
          Give wings to
          <br />
          your <span className="dreams">dreams</span>
          <hr />
          <button className="btn1 border-0">About Us</button>
          <button className="btn2 border-0">Join Our Community</button>
        </div>
        <div className="picture">
          <img
            className="code"
            data-assetindex="0"
            src="./code.svg"
            alt="code"
          />

          <img
            className="girl"
            data-assetindex="1"
            src="./girl.svg"
            alt="girl"
          />
        </div>
      </div>
    </div>
  );
}
