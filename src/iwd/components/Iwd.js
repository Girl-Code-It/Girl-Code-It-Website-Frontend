import React from "react";
import {Container, Row} from "react-bootstrap";
import styles from "../CSS/Main.module.css";
import IwdHeader from "./IwdHeader";
import IwdInterviewList from "./IwdInterviewList";

function Iwd() {
    return (
        <div>
            <Container>
                <header>
                    <IwdHeader />
                </header>

                <IwdInterviewList />
            </Container>
        </div>
    )
}

export default Iwd;