import React, { Component } from "react";
import CodeMap from "../codemap_details/Components/CodeMap";
import Banner from "../codemap_details/Components/Banner";
import Query from "../codemap_details/Components/Query";
import WhatToPay from "../codemap_details/Components/WhatToPay";
import WhyCodeMap from "../codemap_details/Components/WhyCodeMap";

export default class CodeMapDetails extends Component {
  render() {
    return (
      <div>
        <Banner />
        <WhyCodeMap />
        <Query />
        <WhatToPay />
        <CodeMap />
      </div>
    );
  }
}
