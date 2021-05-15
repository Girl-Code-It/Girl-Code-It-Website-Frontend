import React, { Component } from "react";
import Banner from "../homepage/Components/Banner";
import AboutUs from "../homepage/Components/AboutUs";
import Impact from "../homepage/Components/Impact";
import Testimonial from "../homepage/Components/Testimonial";
import FAQS from "../homepage/Components/FAQS";
import QuestionsForm from "../homepage/Components/QuestionsForm";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Impact />
        <AboutUs />
        <Testimonial />
        <FAQS />
        <QuestionsForm />
      </div>
    );
  }
}
