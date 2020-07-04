import React from "react";
import styles from "./Css/FAQS.module.css";

export default function FAQCard(props) {
  const { open } = props.item;
  console.log(open);
  return (
    <div
      className={`faq`}
      key={props.item.id}
      onClick={() => props.handleChange(props.item.id)}
    >
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-2 `}>
            <img
              className={`${open ? styles.imageopen : styles.image}`}
              src="./arrow.png"
              alt=""
              height="25px"
            />
          </div>

          <div className={` col-10 ${styles.faqQuestion}`}>
            {props.item.question}
          </div>
        </div>

        <div className={`${open ? styles.faqAnsweropen : styles.faqAnswer}`}>
          {props.item.answer}
        </div>
        <div className={` ${styles.hdivider}`} />
      </div>
    </div>
  );
}
