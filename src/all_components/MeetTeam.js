import React, { Component } from "react";
import Header from "../team/Components/Header";
import Team from "../team/Components/Team";

export default class MeetTeam extends Component {
  render() {
    return (
      <div>
        <Header />
        <Team />
      </div>
    );
  }
}