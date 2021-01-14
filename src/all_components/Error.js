import React, { Component } from "react";
import Navbar from "../commons/Components/Navbar";
import NotFound from "../not_found/Components/NotFound";

export default class Error extends Component {
  render() {
    return (
        <div>
            <Navbar />
            <NotFound />
        </div>
    );
  }
}
