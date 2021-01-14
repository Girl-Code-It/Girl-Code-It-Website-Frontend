import React, { Component } from "react";
import Navbar from "../commons/Components/Navbar";
import Coming from "../coming_soon/Components/Coming";

export default class ComingSoon extends Component {
  render() {
    return (
        <div>
            <Navbar />
            <Coming />
        </div>
    );
  }
}
