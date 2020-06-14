import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import AboutUs from "./Components/AboutUs";
import Impact from "./Components/Impact";
import CodeMap from "./Components/CodeMap";
import Testimonial from "./Components/Testimonial";
import FAQS from "./Components/FAQS";
import QuestionsForm from "./Components/QuestionsForm";
import Footer from "./Components/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
        <AboutUs />
        <Impact />
        <CodeMap />
        <Testimonial />
        <FAQS />
        <QuestionsForm />
        <Footer />
      </div>
    );
  }
}
