import React, {Component} from "react";
import {Container, Row} from "react-bootstrap";
import IwdInterviewData from "./IwdInterviewData";
import IwdInterviewCard from "./IwdInterviewCard";

export default class IwdInterviewList extends Component {
    constructor() {
        super();
        this.state = {
            IwdInterviewData,
        };
    }
    render() {
        let IwdInterviewData = this.state.IwdInterviewData.map((data) => {
            return <IwdInterviewCard key={data.id} data={data} />;
        });

        return (
            <Container>
                <Row className="justify-content-center">
                    {IwdInterviewData}
                </Row>
            </Container>
        )
    }
}