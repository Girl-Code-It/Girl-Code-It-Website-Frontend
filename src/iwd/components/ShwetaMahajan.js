import React from "react";
import styles from "../CSS/Interview.module.css";

import ShwetaMahajanPic from "../assets/shweta-mahajan.png"
import { Container, Row } from "react-bootstrap";

function ShwetaMahajan() {
    return (
        <div className={styles.Interview}>
            <header className={styles.Header}>
                <h1>Shweta Mahajan</h1>
                <p>Senior Engineering Manager @Walmart</p>
            </header>
            <div className={styles}>

            </div>
            <Container className={styles.Container}>
                <p style={{textAlign: "center"}}>
                    <img src={ShwetaMahajanPic} className={styles.Img} />
                </p>

                <Row>
                    <h5>Which books have greatly influenced your life and thought process?</h5>
                    <p>
                        I read The Class by Erich Segal a few years before starting college. It follows journeys of 5 members of Harvard University Class of 1958 and made me think hard about where I wanted to be during my 25th Class reunion. It helped me prioritise, very early in life, what was most important to me. It is a very special book.
                    </p>
                </Row>

                <Row>
                    <h5>Is there a “favorite failure” of yours, a failure that has set you up for later success?</h5>
                    <p>
                        This question made me think… I realise that I’ve always categorised the events in my life as “Fun” or “Not fun” rather than “Success” or “Failure”. It is okay if I build/find/achieve/attain/learn something different than I originally planned. Not every single thing I do needs to improve my resume, advance my career, make me more money, win me more credits - it is sometimes enough to just be happy doing what feels right.
                    </p>
                </Row>

                <Row>
                    <h5>If you could have a gigantic billboard anywhere with anything written on it, what would be a message you would want to share with millions or billions and why?</h5>
                    <p>
                        Breathe. Be honest to yourself. Take care of your body, we don’t have spares (yet).
                    </p>
                </Row>

                <Row>
                    <h5>In the last five years, what new belief, behavior, or habit has improved your life the most?</h5>
                    <p>
                        “Everyone is really doing their best.” A long time ago, I spent a lot of energy wondering why people didn’t make enough effort, didn’t think hard enough, didn’t care enough, etc. Now, as I have seen more of the world, I have started believing that all people are doing their best. We all come with our own complex situations and need to allocate our available resources to deal with the complexities of daily life. Everyone does it, in the best possible way they can. This simple change in point of view, made me kinder and more patient,not just to other people, but mostly to myself. And it saved me a lot of energy that I can channel elsewhere.    
                    </p>
                </Row>

                <Row>
                    <h5>What advice would you give to a college student on how to begin their career? What are the things they should ignore?</h5>
                    <p>
                    If you ignore things, you won’t learn from/about them. Spend time trying to find out what it is that only you can do. Whatever your circumstances, there will always be things only you will see. Great careers are built on top of foundational events where you will do something nobody else could think of. Keep your eyes and your mind open… all the time.    
                    </p>
                </Row>

                <Row>
                    <h5>What challenges do you think a woman in tech faces while moving to more senior roles?</h5>
                    <p>
                        As women climb the leadership ladders, they will have fewer and fewer role models. Which means, there may not be enough contextual mentorship around situations that women specifically face. Be prepared to experiment and see what works in your organisation. There may not be anyone there who has tried it before.    
                    </p>
                </Row>

                <Row>
                    <h5>What are some of the bad recommendations you hear in your profession?</h5>
                    <p>
                        Recommendations that ask you to change who you are as a person, are all mostly bad. Because of how unique each mind is, each person brings a perspective unique to them. Being forced to give that up is a loss for everyone. Having said that, recommendations that simply provide candid feedback about your behaviours and work without hard-lining your direction if growth, are priceless.
                    </p>
                </Row>

                <Row>
                    <h5>What do you do when you feel unfocused or demotivated?</h5>
                    <p>
                        I take a break and do something I enjoy- in my case, it is either painting or reading.
                    </p>
                </Row>

                <Row>
                    <h5>How were you impacted by the lesser proportion of women in tech?</h5>
                    <p>
                        I had a lot of amazing female peers, but few female mentors. A lot of senior women leaders I have come across, had either adopted a subservient role to their male peers and seniors, or, modified themselves to fit themselves into the male stereotypes, or, found themselves at a dead-end with nobody to guide them on the way forward. These can’t be the only options, maybe I will find the answers eventually.
                    </p>
                </Row>
            </Container>
        </div>
    )
}

export default ShwetaMahajan;