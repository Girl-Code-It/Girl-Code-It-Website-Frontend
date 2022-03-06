import React from "react";
import { Card } from "react-bootstrap"
import styles from  "../../../../team/CSS/TeamCard.module.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa"

export default function TeamCard(props) {
  return (
    <Card className = {styles.cardContent}>
      <div className = {styles.Profile}>
        {/* <a href = {props.data.linkedin} className = {styles.Linkedin}> <FaLinkedinIn/> </a> */}
        {/* <a href = {props.data.github} className = {styles.Github}> <FaGithub/> </a> */}
      </div>
      <Card.Body>
        <div className = {styles.imgWrapper}>
          <Card.Img 
            src={require("../assets/" + props.data.imgUrl)} 
            className={styles.img} 
            style = {{backgroundColor: `${props.data.bgColor}`}}
          />
        </div>
        <div className = {styles.Tag}>
          <h1 className = {styles.Name}>
            {props.data.name}
          </h1>
          <h4 className = {styles.Designation}>
            {props.data.designation}
          </h4>
        </div>
      </Card.Body>
    </Card>
  );
}