import React, { Component } from "react";
import Header from "./Header";
import TeachersData from "./TeachersData";
import LeadsData from "./LeadsData";
import CoreTeamData from "./CoreTeamData";
import FacultyCard from "./FacultyCard";
import TeamCard from "./TeamCard";
import styles from "../CSS/Team.module.css";
import { Container, Jumbotron, Row } from "react-bootstrap";


export default class MAIT extends Component {
  constructor() {
    super();
    this.state = {
      TeachersData,
      LeadsData,
      CoreTeamData,
    };
  }
  render() {
    let Teachers = this.state.TeachersData.map((data) => {
      return <FacultyCard key={data.id} data={data} />;
    });
    let Leads = this.state.LeadsData.map((data) => {
      return <TeamCard key={data.id} data={data} />;
    });
    let CoreTeam = this.state.CoreTeamData.map((data) => {
      return <TeamCard key={data.id} data={data} />;
    });
    return (
      <Jumbotron className = {styles.Jumbotron}>
        <Header/>
        <Container>
          <h1 className = {styles.Title}>
            <span style = {{color: "#008dc8"}}> Maharaja Agrasen Institute of Technology </span>
          </h1>
          {/* <h1 className = {styles.Title}>
            Meet <span style = {{color: "#008dc8"}}> The Team </span>
          </h1> */}

        
  
          <h3 className = {styles.SubTitle}> 
            Faculty
          </h3>
  
          <Row
            className="justify-content-md-center"
          >
            {Teachers}
          </Row>

          <h3 className = {styles.SubTitle}> 
            Leads
          </h3>
  
          <Row
            className="justify-content-md-center"
          >
            {Leads}
          </Row>
  
          <h3 className = {styles.SubTitle}> 
            Core Team
          </h3>
  
          <Row
            className="justify-content-md-center"
          >
            {CoreTeam}
          </Row>
  
          <h3 className = {styles.SubTitle}> 
            {/* Content Team */}
          </h3>
  
          <Row
            className="justify-content-md-center"
            
          >
            {/* {ContentData} */}
          </Row>
  
          <h3 className = {styles.SubTitle}> 
            {/* Management Team */}
          </h3>
  
          <Row
            className="justify-content-md-center"
          >
            {/* {ManagementData} */}
          </Row>
  
          <h3 className = {styles.SubTitle}> 
            {/* Design Team */}
          </h3>  
  
          <Row
            className="justify-content-md-center"
          >
            {/* {DesignData} */}
          </Row>      
        </Container>
      </Jumbotron>
    );
  }
}