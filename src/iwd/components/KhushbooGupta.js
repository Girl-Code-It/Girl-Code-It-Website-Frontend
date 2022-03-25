import React from "react";
import styles from "../CSS/Interview.module.css";

import KhushbooGuptaPic from "../assets/khushboo-gupta.png";
import { Container, Row } from "react-bootstrap";

function KhushbooGupta() {
  return (
    <div className={styles.Interview}>
      <header className={styles.Header}>
        <h1>Khushboo Gupta</h1>
        <p>
          Software Engineer @Google | Competitive Coder | 6 ⭐ Coder @Codechef
        </p>
      </header>
      <div className={styles}></div>
      <Container className={styles.Container}>
        <p style={{ textAlign: "center" }}>
          <img src={KhushbooGuptaPic} className={styles.Img} />
        </p>

        <Row>
          <h5>
            What are one to three books that have greatly influenced your life
            and thought process?
          </h5>
          <p>
            I am not a book reader, I like reading things from quora, wikipedia
            and articles instead. Around 7-8 years ago, I read 2-3 books about
            Dr. APJ Abdul Kalam. I remember reading ‘Wings of Fire” - I loved
            that book. It had all the failure and success stories of sir, it
            changed my thought process regarding the things that I want to
            achieve: Never ever give up, keep trying and improving yourself, you
            have to believe in yourself, have patience.
          </p>
        </Row>

        <Row>
          <h5>
            Is there a “favorite failure” of yours, a failure that has set you
            up for later success?
          </h5>
          <p>
            Accepting failure takes a lot of time! Trust me, accepting that you
            have failed is never ever a good feeling. I don’t know, maybe I can
            still never accept my failures without feeling bad that I have
            failed. I think it’s for good, because then you believe more in
            yourself, and don’t want to give up. So I will never ever say
            favorite failure, because no one likes failures. I know, failures
            are the parts of our lives and no one gets success on the first
            attempt. Almost everyone has faced failures at one point of time in
            their lives. To be honest, I don’t like failures - I didn’t like
            when I stood 2nd in 8th class board by 1 mark, I didn’t like when my
            name was not in 10th board merit list (before 10th board results, I
            dreamt many times that how will it feel when I’ll get my name in the
            merit list, I was expecting it very badly, you can say), I didn’t
            like it when I couldn’t get into the IIT Bombay CS branch (It was my
            biggest dream that time). Today, I know all of these things don't
            affect my present life, not even 1%, so life is always about moving
            on. Whenever we think that everything is over now, it’s not over, it
            will be over only if you stop trying.
          </p>
        </Row>

        <Row>
          <h5>
            If you could have a gigantic billboard anywhere with anything
            written on it - What would be a message you would want to get out to
            millions or billions and Why?
          </h5>
          <p>
            To solve a problem, perspective matters the most and the right
            perspective for a particular problem comes from practice
            (experience). If you’re not able to solve a problem, change your
            perspective & repeat this process until you succeed.
          </p>
        </Row>

        <Row>
          <h5>
            What advice would you give to a college student looking to become a
            better Problem Solver and Competitive Programmer?
          </h5>
          <p>
            Competitive programming, I’ll say, is a very depressing field when
            you’re not able to solve a problem. Only self motivation can help
            you to do good in this. You have to believe in yourself, just
            remember every expert was once a beginner, no one became expert
            overnight. So it’s all about your learning graph - you won’t realize
            it at first, but when you compare your progress with that of your
            older version, you’ll exclaim “Oh, I’m improving” :) So this
            self-motivation has to come from within you. Have patience, and keep
            trying and improving yourself, just don’t give up!!
            <br></br>
            Technical advice: Participate in online coding contests, give your
            best, after the contest upsolve the problem and see the editorials
            and other people’s code also to get more insights. It’ll help you
            know many short tricks and awesome methods that people use and
            totally different approaches than you. Apart from contests, make a
            list of DSA and learn them and then solve 3-4 problems on them to
            master it. Try to come out of your comfort zone and try to solve
            problems above your current level. Lastly, I want to say that only
            practice matters here, so practice as much as you can.
          </p>
        </Row>

        <Row>
          <h5>
            What advice would you give to fresher SWEs transitioning from
            college to their first job?
          </h5>
          <p>
            In the first job, focus on learning as many tech stacks as you can,
            explore the areas, see what’s new, what needs to be improved, and be
            a team player.
          </p>
        </Row>

        <Row>
          <h5>
            In the last five years, what new belief, behavior, or habit has most
            improved your life?
          </h5>
          <p>
            I always share what’s happening in my life with my parents, so we
            don’t have any communication gaps. It doesn’t matter whether our
            thought processes match or not, we always try to understand each
            other. Whenever I feel tense or happy, I tell my parents, because
            once we start talking, then half of the problems go away very easily
            and you’ll get calmness to think about solutions to resolve that
            problem.
          </p>
        </Row>

        <Row>
          <h5>
            What do you enjoy the most about your work as a Software Engineer at
            Google?
          </h5>
          <p>
            In my work at Google, I’m learning new things daily, so learning
            opportunities matter to me the most, this is what keeps me more
            focused.
          </p>
        </Row>

        <Row>
          <h5>
            What are bad recommendations you hear in your profession or area of
            expertise?
          </h5>
          <p>
            I don’t remember any bad recommendations, but I will say don’t run
            behind the money. Of-course money matters in life, but it should not
            be your main goal, your main goal should be to grow in your career
            and learn things.
          </p>
        </Row>
        <Row>
          <h5>What do you do when you feel unfocused or demotivated?</h5>
          <p>
            Demotivated: I am thankful to god that I have this self-motivation
            power. Whenever I feel demotivated, I try to recall my old
            achievements, and the times when I achieved the things which I
            thought I could never achieve - so ye bhi ho jayega, be patient and
            believe in yourself. Unfocused: I also believe that you can not lie
            to yourself. If I have not been productive today, I'm definitely
            gonna feel bad whether I accept it or not. So when I feel unfocused,
            I just don’t like the feeling of being non-productive, and I know
            it. I take some breaks to chill and after that break I re-prioritize
            the things and set my mind to work hard again. It helps me to stay
            focused and feel satisfied for being productive.
          </p>
        </Row>
      </Container>
    </div>
  );
}

export default KhushbooGupta;
