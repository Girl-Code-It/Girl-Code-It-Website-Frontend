import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "../CSS/Impact.module.css";
// import { Link } from "react-router-dom";

export default function ImpactCard(props) {
  return (
    <Card id = "impact" className = {styles.Card}>
      <Card.Body>
        <Row>
          <Col xs = {12} md = {12} lg = {4}>
            <Card.Img 
              src={require("../assets/" + props.impact.imgUrl)} 
              className = {styles.Img}
            />
          </Col>
          <Col className = {styles.Content}>
            <Card.Title className = {styles.Title}>
              {props.impact.name}
            </Card.Title>
            <div className = {styles.line}></div>
            <Card.Text className = {styles.Para}>
              {props.impact.para1}
              <br/>
              {props.impact.para2}
            </Card.Text>
          </Col>
        </Row>
        <Row style = {{flex: "end"}}>
          <a href = {props.impact.link} className = {styles.Button}>
            Know More
          </a>
        </Row>
      </Card.Body>
    </Card>
  );
}
