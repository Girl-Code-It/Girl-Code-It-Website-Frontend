import React, { Component } from "react";
import CodeMap from "./codemap_details/Components/CodeMap";
import Navbar from "./commons/Components/Navbar";
import Footer from "./commons/Components/Footer";
import Homepage from "./all_components/Homepage";
import OppCalendarDetails from "./all_components/OppCalendarDetails";
import CodeMapDetails from "./all_components/CodeMapDetails";
import OneCodeMapDetails from "./all_components/OneCodeMapDetails";
import MeetTeam from "./all_components/MeetTeam";
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
                  <Homepage />
                </div>
              )}
            />
            <Route
              exact
              path="/oppcalender"
              render={(props) => (
                <div>
                  <OppCalendarDetails />
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
              path="/meettheteam"
              render={(props) => (
                <div>
                  <MeetTeam />
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
