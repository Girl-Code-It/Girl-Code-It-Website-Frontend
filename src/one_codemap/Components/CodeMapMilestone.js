import React from "react";
import { Container } from "react-bootstrap";
import MilestoneCard from "./MilestoneCard";
import styles from "../CSS/CodeMapMilestone.module.css";

export default function CodeMapMilestone({ data }) {
  return (
    <Container id="content" style={{ maxWidth: "100rem" }} fluid>
      <h1 style={{ textAlign: "center", margin: "3rem 0" }}>
        CodeMap{" "}
        <span style={{ color: "#1D82B5", fontFamily: "Poppins, sans-serif" }}>
          Content
        </span>
      </h1>

      <div className={styles.grid}>
        {data &&
          data.milestones &&
          data.milestones.map((m, i) => {
            m.id = i + 1;
            return <MilestoneCard {...m} key={i} />;
          })}
      </div>
    </Container>
  );
}
