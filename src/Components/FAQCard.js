import React from "react";

export default function FAQCard(props) {
  return (
    <div
      className={"faq" + (props.item.open ? " open" : "")}
      key={props.item.id}
      onClick={() => props.handleChange(props.item.id)}
    >
      <div className="container-fixed">
        <div className="faq-question">{props.item.question}</div>
        <div className="faq-answer">{props.item.answer}</div>
        <div className="h-divider" />
      </div>
    </div>
  );
}
