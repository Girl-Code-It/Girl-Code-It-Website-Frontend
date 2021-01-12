import React from "react";
import { Container } from "react-bootstrap";
import MilestoneCard from "./MilestoneCard";
import styles from "../CSS/CodeMapMilestone.module.css";

const milestones = [
  {
    id: 1,
    topic: "Basics of C++",
    duration: "1 Month",
    resources: 5,
    imgSrc: `https://picsum.photos/200?${Math.random()}`,
  },
  {
    id: 2,
    topic: "Functions",
    duration: "1 Week",
    resources: 2,
    imgSrc: `https://picsum.photos/200?${Math.random()}`,
  },
  {
    id: 3,
    topic: "Pointers",
    duration: "3 Weeks",
    resources: 10,
    imgSrc: `https://picsum.photos/200?${Math.random()}`,
  },
  {
    id: 4,
    topic: "Recurssion",
    duration: "1 Year",
    resources: 20111,
    imgSrc: `https://picsum.photos/200?${Math.random()}`,
  },
  {
    id: 1,
    topic: "C++: Advance",
    duration: "1 Month",
    resources: 0,
    imgSrc: `https://picsum.photos/200?${Math.random()}`,
  },
];

export default function CodeMapMilestone() {
  return (
    <Container style={{ maxWidth: "100rem" }} fluid>
      <h1 style={{ textAlign: "center", margin: "3rem 0" }}>
        CodeMap{" "}
        <span style={{ color: "#1D82B5", fontFamily: "Poppins, sans-serif" }}>
          Content
        </span>
      </h1>

      <div className={styles.grid}>
        {milestones.map((m, i) => (
          <MilestoneCard {...m} key={i} />
        ))}
      </div>
    </Container>
  );
}
