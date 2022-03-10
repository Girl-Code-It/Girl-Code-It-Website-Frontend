import React from "react";
import styles from "../CSS/Interview.module.css";

import ShereenKhanPic from "../assets/shereen-khan.png"
import { Container, Row } from "react-bootstrap";

function ShwetaMahajan() {
    return (
        <div className={styles.Interview}>
            <header className={styles.Header}>
                <h1>Shereen Khan</h1>
                <p>Manager, IT Apps Engineering @Twitter</p>
            </header>
            <div className={styles}>

            </div>
            <Container className={styles.Container}>
                <p style={{textAlign: "center"}}>
                    <img src={ShereenKhanPic} className={styles.Img} />
                </p>

                <Row>
                    <h5>How has motherhood played a role in your career? Did you face any challenges, if yes, How did you overcome them?</h5>
                    <p>
                    Motherhood has changed me to become much more empathetic to everyone’s situation especially when it comes to family. I am more aware of people and their situations and want to help them with anything that they bring to me, personal or professional. I enjoy learning about different people and ask how they are doing all the time and genuinely care to listen. 

                    </p>
                    <p>
                    Motherhood can be a challenge every single day-but you overcome each time for your kids. From daily pick up/drop off, what to make for dinner, to helping the kids with their studies. Bigger challenges of trying to teach your kids life lessons and how to deal with different personalities at school also come up. Overcoming the smaller details just requires major organization, the bigger issues you need to learn to take time out to ensure they get addressed. Also choose a partner that will grow with you and respect each other, if you are a team you can overcome a lot of difficulties. The reward is overwhelming with kids though. I highly recommend having a few :P
                    </p>
                </Row>

                <Row>
                    <h5> In the last five years, what new belief, behavior, or habit has most improved your life?</h5>
                    <p>
                    Exercise - I never wanted to do it, or had time, I was either too busy or too lazy to work out. Now I schedule time each week to do it and my body actually needs it. Taking care of your body from early on is so important to your mental health as well. Also #SelfCare is real-not just working out but doing something that makes you feel better (spa days or eating that cupcake or having some chocolate.) Indulge yourself when you need to and forgive yourself for it. 
                    </p>
                </Row>

                <Row>
                    <h5>What advice would you give to college students about to begin their careers? What advice should they ignore?</h5>
                    <p>
                    Work smart, don’t just work hard thinking you will get noticed. Ensure people are aware of your efforts when appropriate. Don't be scared to think differently or act differently.
                    "Just do it like this, it's how it's always been done"-  Just because it's been done a certain way doesn't mean you have to do it that way or give in. If you see some type of improvement that can be made, go ahead and do it. 
                Ignore if someone tells you the words 'you can't'. Anyone can do anything they want to. You can learn, you can practice and you can do...youtube or google it!

                    </p>
                </Row>

                <Row>
                    <h5>Is there a “favorite failure” of yours, a failure that set you up for later success?</h5>
                    <p>
                    When I was an intern, I was given access to a system and told to play around in there to "figure it out." So one day I decided to do that and just make some changes in there, the following morning I came in to people frantically trying to correct a system. It was what I had done! Someone had given me access to production instead of a test environment, which I didn't know. It wasn’t completely my mistake but I learned to ensure security and access are always set up correctly between diff environments for users and give clear instructions to everyone, especially new people that join. Be detailed in giving instructions and always have a back out plan for mistakes!    
                    </p>
                </Row>

                <Row>
                    <h5>What challenges do you think a woman in tech faces while moving to more senior roles?</h5>
                    <p>
                    Being heard. I had to literally speak louder and sit in front. Also people think women will de facto become the record keeper, set up and clean up at meetings. Don’t always volunteer to do those types of things just because the all men group thinks it’s your job.
   
                    </p>
                </Row>

                <Row>
                    <h5>What do you do when you feel unfocused or demotivated?</h5>
                    <p>
                    Stop what you are doing and do something relaxing or that you enjoy. Take a break-15 min, an hour, a day, any time you can afford. Usually it’s due to burnout for me so getting recharged is what I need. Take a walk, go get a snack, play a game, watch a movie, go on a vacation/staycation. Oftentimes it's being mentally exhausted and giving yourself a chance to rest.   
                    </p>
                </Row>

                <Row>
                    <h5>Open Comment - Anything else that you want to share?</h5>
                    <p>
                    It’s not easy balancing motherhood and a career but it is so worth having both of them for myself. Some people want one or the other and I respect their choice just as I would expect them to respect mine. It can be done and it's okay to ask for help along the way with either thing, so don’t be afraid to want both things.

                    </p>
                </Row>
            </Container>
        </div>
    )
}

export default ShwetaMahajan;