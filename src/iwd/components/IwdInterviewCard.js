import React from "react";
import {Card, Row, Col} from "react-bootstrap";
import styles from "../CSS/Main.module.css";

export default function IwdInterviewCard(props){
    return (
    
        <Card style = {{width: "20rem", margin: "20px", borderRadius: "20px"}}>
            <Card.Body style = {{padding: "0px"}}>
                <div>
                    <Card.Img
                        src={require("../assets/" + props.data.imgUrl)}
                    />
                </div>

                <div className={styles.Tag}>
                    <p className={styles.interviewName} style={{color: `${props.data.themeColor}`}}> 
                        {props.data.name}
                    </p>
                    <p className={styles.interviewDesignation}>
                        {props.data.designation}
                    </p>
                    <a href={props.data.interviewUrl}>
                        <button className={styles.Button}>
                            View
                        </button>
                    </a>
                </div>
            </Card.Body>
        </Card>
    
    )
}