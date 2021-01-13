import React from "react";
import styles from "../CSS/Header.module.css";
import { Container, Jumbotron } from "react-bootstrap";

export default function Header() {
  return (
    <div className = {styles.Background}>
      <h1 className = {styles.Title}> 
        Behind The Scene 
      </h1>
      <p className = {styles.Para}>
        From an idea conceived and discussed on college stairs, 
        to finally realising it and helping countless kids with 
        their coding. GCI has surely come a long way!
        We hope to continue this saga of helping others forever.
        <br/> 
        <br/> 
        The Code must live on !
      </p>
  </div>
  );
}