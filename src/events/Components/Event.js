import React, {Component} from "react";
import { Container, Jumbotron, Row } from "react-bootstrap";
import EventCard from "./EventCard";
import EventData from "./EventData";
import styles from "../CSS/Event.module.css";

class Event extends Component {
    constructor() {
        super();
        this.state = {
            EventData
        };
    }

    render() {
        let EventData = this.state.EventData.map((data) => {
            return <EventCard key={data.id} data={data} />;
        });

        return (
            <Jumbotron className = {styles.Jumbotron}>
                <Container>
                    <Row className="justify-content-md-center">
                        {EventData}
                    </Row>  
                </Container>
            </Jumbotron>
        );
    }
}

export default Event