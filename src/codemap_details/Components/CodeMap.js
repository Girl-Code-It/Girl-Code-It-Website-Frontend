import React, { Component } from "react";
import CodeMapCard from "./CodeMapCard";
import styles from "../CSS/CodeMap.module.css";

export default class CodeMap extends Component {
  render() {
    return (
      <>
        <CodeMapCard />
        <CodeMapCard />
        <CodeMapCard />
        <CodeMapCard />
        <CodeMapCard />
        <CodeMapCard />
      </>
    );
  }
}
