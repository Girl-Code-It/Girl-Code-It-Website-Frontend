import React, { Component } from "react";
import Navbar from "./commons/Components/Navbar";
import Footer from "./commons/Components/Footer";
import Banner from "./homepage/Components/Banner";
import AboutUs from "./homepage/Components/AboutUs";
import Impact from "./homepage/Components/Impact";
import Testimonial from "./homepage/Components/Testimonial";
import FAQS from "./homepage/Components/FAQS";
import QuestionsForm from "./homepage/Components/QuestionsForm";
import CodeMap from "./codemap_details/Components/CodeMap";
import CodeMapBanner from "./codemap_details/Components/CodeMapBanner";
import Query from "./codemap_details/Components/Query";
import WhatToPay from "./codemap_details/Components/WhatToPay";
import WhyCodeMap from "./codemap_details/Components/WhyCodeMap";
import OneCodeMap from "./one_codemap/Components/OneCodeMap";
import CodeMapMilestone from "./one_codemap/Components/CodeMapMilestone";
import OppCalenderBanner from "./oppc_details/Components/OppCalenderBanner";
import KnowAbout from "./oppc_details/Components/KnowAbout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <div>
                  <Banner />
                  <AboutUs />
                  <Impact />
                  <Testimonial />
                  <FAQS />
                  <QuestionsForm />
                </div>
              )}
            />
            <Route
              exact
              path="/oppcalender"
              render={(props) => (
                <div>
                  <OppCalenderBanner />
                  <KnowAbout />
                </div>
              )}
            />
            <Route
              exact
              path="/codemaps"
              render={(props) => (
                <div>
                  <CodeMapBanner />
                  <OneCodeMap />
                  <WhyCodeMap />
                  <Query />
                  <WhatToPay />
                  <CodeMap />
                </div>
              )}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
