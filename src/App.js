import React, { Component } from "react";
import Navbar from "./commons/Components/Navbar";
import Footer from "./commons/Components/Footer";
import Homepage from "./all_components/Homepage";
// import OppCalendarDetails from "./all_components/OppCalendarDetails";
import ComingSoon from "./all_components/ComingSoon";
import CodeMapDetails from "./all_components/CodeMapDetails";
import OneCodeMapDetails from "./all_components/OneCodeMapDetails";
import MeetTeam from "./all_components/MeetTeam";
import Review from "./all_components/Review";
import Events from "./all_components/Events";
import Error from "./all_components/Error";
// IWD IMPORT
import ShwetaMahajan from "./iwd/components/ShwetaMahajan";
import ShereenKhan from "./iwd/components/ShereenKhan";
// CHAPTERS IMPORT
import MAIT from "./all_components/chapters/MAIT/Components/MAIT";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SimranNazare from "./iwd/components/SimranNazare";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar style={{ marginBottom: "100px" }} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <div>
                  <Homepage />
                </div>
              )}
            />
            <Route
              exact
              path="/oppcalendar"
              render={(props) => (
                <div>
                  <ComingSoon />
                </div>
              )}
            />
            <Route
              exact
              path="/codemaps"
              render={(props) => (
                <div>
                  <CodeMapDetails />
                </div>
              )}
            />
            <Route
              exact
              path="/onecodemap"
              render={(props) => (
                <div>
                  <OneCodeMapDetails />
                </div>
              )}
            />
            <Route
              exact
              path="/meettheteam"
              render={(props) => (
                <div>
                  <MeetTeam />
                </div>
              )}
            />
            <Route
              exact
              path="/reviews"
              render={(props) => (
                <div>
                  <Review />
                </div>
              )}
            />
            <Route
              exact
              path="/events"
              render={(props) => (
                <div>
                  <Events />
                </div>
              )}
            />
            {/* IWD ROUTES */}
            <Route
              exact
              path="/iwd/shweta-mahajan"
              render={(props) => (
                <div>
                  <ShwetaMahajan />
                </div>
              )}
            />
             <Route
              exact
              path="/iwd/shereen-khan"
              render={(props) => (
                <div>
                  <ShereenKhan />
                </div>
              )}
            />
            <Route
              exact
              path="/iwd/simran-nazare"
              render={(props) => (
                <div>
                  <SimranNazare />
                </div>
              )}
            />
            {/* CHAPTER ROUTES */}
            <Route
              exact
              path="/mait"
              render={(props) => (
                <div>
                  <MAIT />
                </div>
              )}
            />
            <Route
              exact
              path="*"
              render={(props) => (
                <div>
                  <Error />
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
