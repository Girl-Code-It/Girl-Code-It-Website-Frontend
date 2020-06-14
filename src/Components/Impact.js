import React, { Component } from "react";
import ImpactList from "./ImpactList";

export default class Impact extends Component {
  render() {
    return (
      <div>
        <ImpactList />
        <ImpactList />
      </div>
    );
  }
}
