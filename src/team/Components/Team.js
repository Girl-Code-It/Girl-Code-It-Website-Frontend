import React, {Component} from "react";
import { Container, Jumbotron, Row } from "react-bootstrap";
import TeamCard from "./TeamCard";
import styles from "../CSS/Team.module.css";
import FoundingData from "./FoundingData";
import TechData from "./TechData";
import ContentData from "./ContentData";
import ManagementData from "./ManagementData";
import DesignData from "./DesignData";

export default class Team extends Component {
  constructor() {
    super();
    this.state = {
      FoundingData,
      TechData,
      ContentData,
      ManagementData,
      DesignData
    };
  }
  render() {
    let FoundingData = this.state.FoundingData.map((data) => {
      return <TeamCard key={data.id} data={data} />;
    });

    let TechData = this.state.TechData.map((data) => {
      return <TeamCard key={data.id} data={data} />;
    });

    let ContentData = this.state.ContentData.map((data) => {
      return <TeamCard key={data.id} data={data} />;
    });

    let ManagementData = this.state.ManagementData.map((data) => {
      return <TeamCard key={data.id} data={data} />;
    });

    let DesignData = this.state.DesignData.map((data) => {
      return <TeamCard key={data.id} data={data} />;
    });

    return (
      <Jumbotron className = {styles.Jumbotron}>
        <Container>
          <h1 className = {styles.Title}>
            Meet <span style = {{color: "#008dc8"}}> The Team </span>
          </h1>

          <h3 className = {styles.SubTitle}> 
            Founding Committee
          </h3>

          <Row
            className="justify-content-md-center"
          >
            {FoundingData}
          </Row>

          <h3 className = {styles.SubTitle}> 
            Tech Instructors
          </h3>

          <Row
            className="justify-content-md-center"
          >
            {TechData}
          </Row>

          <h3 className = {styles.SubTitle}> 
            Content Team
          </h3>

          <Row
            className="justify-content-md-center"
            
          >
            {ContentData}
          </Row>

          <h3 className = {styles.SubTitle}> 
            Management Team
          </h3>

          <Row
            className="justify-content-md-center"
          >
            {ManagementData}
          </Row>

          <h3 className = {styles.SubTitle}> 
            Design Team
          </h3>  

          <Row
            className="justify-content-md-center"
          >
            {DesignData}
          </Row>      
        </Container>
      </Jumbotron>
    );
  }
}
