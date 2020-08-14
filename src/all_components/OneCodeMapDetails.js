import React, { Component } from "react";
import OneCodeMap from "../one_codemap/Components/OneCodeMap";
import CodeMapMilestone from "../one_codemap/Components/CodeMapMilestone";

export default class OneCodeMapDetails extends Component {
  render() {
    return (
      <div>
        <OneCodeMap />
        <CodeMapMilestone />
      </div>
    );
  }
}
