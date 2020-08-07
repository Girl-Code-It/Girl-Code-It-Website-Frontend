import React from "react";
import styles from "../Css/Testimonial.module.css";

const styleImage = {
  position: "absolute",
  width: "100px",
  transfrom: "translateX(-50%)"
};

const bg_color = {
  backgroundColor: "#008dc8",
  textAlign: "center"
}

// pa4-ns
function TestimonialCard(props) {
  return (
    <div className="center mw7 bg-white br3 mt5 ba b--black-10">
      <div>
        <img
          {...styleImage}
          className="nt5 mw4 mh4 dib br-100 center"
          src={props.test.imgUrl}
          alt="nn "
        />
      </div>

      <p className={styles.block}>{props.test.detail1}</p>
      <hr className="center mw3 bb bw1 b--black-10 mv2" />
      <h3 style={bg_color}>{props.test.name}</h3>
    </div>
  );
}

export default TestimonialCard;
