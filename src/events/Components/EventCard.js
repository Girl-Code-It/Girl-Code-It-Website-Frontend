import React from "react";
import { Card } from "react-bootstrap"
import styles from "../CSS/EventCard.module.css";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai"

function EventCard(props) {
    return (
        <Card style = {{width: "20rem", margin: "20px", borderRadius: "20px"}}>
            <Card.Body style = {{padding: "0px"}}>
                <div className = {styles.imgWrapper}>
                    <Card.Img 
                        src={require("../Assets/" + props.data.imgUrl)} 
                        className={styles.img} 
                    />
                </div>

                <div className = {styles.Tag}>
                    <h1 className = {styles.Name}>
                        {props.data.titlePart1}
                        <span style = {{color: "#008cd8"}}>
                            {props.data.titlePart2}
                        </span>
                    </h1>
                    <div className = {styles.Underline}></div>
                    <div>
                        <AiOutlineCalendar style = {{marginRight: "15px"}}/>
                        {props.data.date}
                    </div>
                    <div>
                        <AiOutlineUser style = {{marginRight: "15px"}}/>
                        {props.data.speaker}
                    </div>
                </div>

                <a href = {props.data.link} target = "_blank" style = {{textDecoration: "none", outline: "none"}}>
                    <button className = {styles.Button}>
                        View
                    </button>
                </a>
            </Card.Body>
        </Card>
    );
}

export default EventCard