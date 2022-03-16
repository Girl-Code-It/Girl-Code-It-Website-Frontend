import React from "react";
import styles from "../CSS/Interview.module.css";

import SimranNazarePic from "../assets/simran-nazare.jpg"
import { Container, Row } from "react-bootstrap";

function SimranNazare() {
    return (
        <div className={styles.Interview}>
            <header className={styles.Header}>
                <h1>Simran Nazare</h1>
                <p>Dance Fitness Trainer</p>
            </header>
            <div className={styles}>

            </div>
            <Container className={styles.Container}>
                <p style={{textAlign: "center"}}>
                    <img src={SimranNazarePic} className={styles.Img} />
                </p>

                <Row>
                    <h5>What are one to three books that have greatly influenced your life and thought process?</h5>
                    <p>
                    The first one has to be "You Can Heal Your Life". It has taught me way more than I could have asked for. It has helped me believe that it really is all in the head. If you are willing to work on yourself and rewire things that may need attention, just about anything is possible. It somewhat gave me a new perspective and heightened the hope and faith I have in myself.
                    The next is Atomic habits. This really helped me break patterns and build new and productive habits which eventually helped decrease mind fog and led to me being more disciplined and aware about what I do with my time.

                    </p>
                </Row>

                <Row>
                    <h5>Is there a “favorite failure” of yours, a failure that has set you up for later success?</h5>
                    <p>
                            There sure are many and I like how you've termed it.<br/>
                            The most highlighted "Favorite Failure" of mine is me not being able to go to Singapore and get my degree in performing arts. Right after my graduation, I wanted to get out of the country and get a formal degree in dance. I did my research and got into Lasalle College of Arts, Singapore. I was all set to leave and experience a new life but then I was graced with an injury. I was pretty heartbroken and bogged down. However, if that wouldn't have happened, I would have been stuck in Singapore, during the lockdowns, not dancing in studios but learning dance online straight out of my room. I'm pretty sure I would be dreading life. Also, the cherry on top was getting into Cult a few months after the injury. I got to dance and shoot sessions(even during the lockdown), change lives and get mentally and physically fit myself along with my Cult members.
                            All in all, some failures are like gift wrappers that have your best experiences enclosed within.

                    </p>
                </Row>

                <Row>
                    <h5>If you could have a gigantic billboard anywhere with anything written on it - What would be a message you would want to get out to millions or billions and Why? (Could be a quote by you or anyone else that you live your life by)</h5>
                    <p>
                    I love this question.<br/>
                    I had the answer right away. It is "Hustle se Haasil". This is Siddhart Chaturvedi's instagram bio. It struck a cord immediately after I read it and I knew that if I have anything to write about myself and it needs a subject, it'll be this. 
                    And why? There's an unbeatable energy when you are putting in the work, gaining the experience, hustling and going head on at your passion; success is inevitable. 

                    </p>
                </Row>

                <Row>
                    <h5>In the last five years, what new belief, behavior, or habit has improved your life the most?</h5>
                    <p>
                    The last few years have transformed me and by that I mean, I have accepted and welcomed change however uncomfortable it may have been. I have learnt that thousands of people out there can have the same goal as yours and might be working 10x times harder than you but your journey is solely yours. Nothing can interject your trajectory if your intentions and goals are mapped. People will only tread by your side, not cut your path. It again is all about perspectives. My belief is nobody is ever a competition but they are all a lesson.
                        This perspective has helped me grow immensely and welcome so many talented and beautiful individuals & experiences into my life.
    
                    </p>
                </Row>

                

                <Row>
                    <h5>What advice would you give to someone trying to make a career choice?</h5>
                    <p>
                    I would always say listen to the rational side of your heart. Which means, follow your passion and strategize an income from it. Absolutely anything is possible if your heart is into what you're doing.
   
                    </p>
                </Row>

                <Row>
                    <h5>What kind of reaction did you get from your parents, relatives, friends when you chose to become a Dance Fitness Trainer which is kinda a less-traveled path in a society of aspiring doctors, engineers, etc?</h5>
                    <p>
                    I am fortunately blessed with a supportive family. I was never discouraged and asked to change my goals or path. However, coming to society, I'm not too sure about how well my profession is received. But I mean, you do you! Today, they might not be the most encouraging but when they see you flourish(and that you did because you followed your heart), it'll all be silenced naturally.
                    </p>
                </Row>

                <Row>
                    <h5>What do you do when you feel unfocused or demotivated?</h5>
                    <p>
                    Honestly, I just lay in bed/chill/get out/write and give myself a break. Being unfocused or demotivated is my mind's way of saying it needs juice. My juice is to pause and rejuvenate. 
                    </p>
                </Row>

               
            </Container>
        </div>
    )
}

export default SimranNazare;