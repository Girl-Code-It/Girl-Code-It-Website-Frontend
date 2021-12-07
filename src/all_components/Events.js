import React, { Component } from "react";
import Header from "../events/Components/Header";
import Event from "../events/Components/Event";

export default class Events extends Component {
  render() {
    return (
      <div>
        <Header />
        <Event/>
      </div>
    );
  }
}