import React from "react";
import styles from "../CSS/Interview.module.css";

import NikitaGuptaPic from "../assets/nikita-gupta.png"
import { Container, Row } from "react-bootstrap";

function SimranNazare() {
    return (
        <div className={styles.Interview}>
            <header className={styles.Header}>
                <h1>Nikita Gupta</h1>
                <p>Founder @FAANGPath | Senior Technical Recruiter @Uber</p>
            </header>
            <div className={styles}>

            </div>
            <Container className={styles.Container}>
                <p style={{textAlign: "center"}}>
                    <img src={NikitaGuptaPic} className={styles.Img} />
                </p>

                <Row>
                    <h5>What are one to three books that have greatly influenced your life and thought process?</h5>
                    <p>
                        None, learned through hands- on experience in life and through my parents :)

                    </p>
                </Row>

                <Row>
                    <h5>Is there a “favorite failure” of yours, a failure that has set you up for later success?</h5>
                    <p>
                        I have failed 100+ times, don't remember anyone in particular, but whenever I failed it made me work harder

                    </p>
                </Row>

                <Row>
                    <h5>If you could have a gigantic billboard anywhere with anything written on it - What would be a message you would want to get out to millions or billions and Why? (Could be a quote by you or anyone else that you live your life by)</h5>
                    <p>
                        If I can do you can do it, everything in life is achievable, trust yourself, and you can do it.

                    </p>
                </Row>

                <Row>
                    <h5>How do you manage time while working on your venture FAANGPath and your full-it's job?</h5>
                    <p>
                        When you see so many job seekers getting jobs, then my work gets easy, sometimes it's overwhelming, but it's my passion to get folks hired, so it becomes easy

                    </p>
                </Row>

                

                <Row>
                    <h5>What new belief, behavior, or habit has most improved your life in the last five years?</h5>
                    <p>
                        Started being more structured and goal-oriented. Have a proper routine to achieve my goals. I also stopped believing that I couldn't do this work. 
                    </p>
                </Row>

                <Row>
                    <h5>What challenges do you think a woman faces while moving to more senior roles?</h5>
                    <p>
                        Comments like you are women that's why you are getting promoted, you don't have skills to be promoted, less support, more sympathy
                    </p>
                </Row>

                <Row>
                    <h5>What advice would you give to college students about beginning their careers? Conversely, what direction should they ignore?</h5>
                    <p>
                        Focus on building your profile, do internships, part-time jobs, freelancing, create an impact, definitely enjoy college life but do focus on building your career too.
                    </p>
                </Row>

                <Row>
                    <h5>What do you do when you feel unfocused or demotivated?</h5>
                    <p>
                        After any failure for a few days it makes me feel so as failures are hard, it makes you think under-confident for a while.
                    </p>
                </Row>

               
            </Container>
        </div>
    )
}

export default SimranNazare;