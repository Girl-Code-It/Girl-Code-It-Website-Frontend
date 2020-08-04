import React from "react";
import Styles from "../Css/testimonialCard.module.css";

function TestimonialCard(props) {
  return (
    <div className=" center mw7 bg-white br3 pa3 mv5 pb0 ba b--black-10">
      <div className="imgBox">
        <img
          className={`nt5 mw4 mh4 dib br-100 center ${Styles.displayPicture}`}
          src={props.test.imgUrl}
          alt="nn "
        />
      </div>

      <p className={`mt1 lh-copy measure center f6 ${Styles.summary}`}>{props.test.summary}</p>
      <hr className="center mw3 bb bw1 b--black-10 mv2" />
      <h3 className = {`ghg name white ${Styles.username}`}> {props.test.name} </h3>
    </div>
  );
}

export default TestimonialCard;
