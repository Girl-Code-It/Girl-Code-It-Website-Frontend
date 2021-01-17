import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import styles from "../CSS/CodeMapCard.module.css";

function finalUri(id) {
  // when changing the `/onecodemap` page, change it here as well.
  return `/onecodemap?id=${encodeURIComponent(id)}`;
}

/*
 * for some reason, text container's width is not scaling down.
 * until I figure out what the issue is, following function
 * will handle it
 */
function setTextContainerWidth(parentRef, imgRef, textRef) {
  const parentWidth = parseFloat(getComputedStyle(parentRef.current).width);
  const imgWidth = parseFloat(getComputedStyle(imgRef.current).width);

  textRef.current.style.maxWidth = parentWidth - imgWidth - 30 + "px";
}

export default function CodeMapCard(props) {
  const imgRef = React.useRef();
  const textRef = React.useRef();
  const parentRef = React.useRef();

  React.useEffect(() => {
    // exec when component gets mounted
    setTextContainerWidth(parentRef, imgRef, textRef);

    window.addEventListener("resize", () =>
      setTextContainerWidth(parentRef, imgRef, textRef)
    );
  }, []);

  return (
    <Card className={styles.card}>
      <div className={styles.topbar}></div>
      <Row
        ref={parentRef}
        className="align-items-center"
        style={{ flexWrap: "nowrap" }}
      >
        <Col xs="auto" style={{ textAlign: "center" }}>
          <Card.Body ref={imgRef} style={{ paddingRight: 0 }}>
            <Card.Img
              variant="bottom"
              className={styles.img}
              src={props.codeMap.imgUrl}
            />
          </Card.Body>
        </Col>
        <Col xs="auto" ref={textRef}>
          <Card.Body style={{ paddingLeft: 0 }}>
            <Card.Title className={styles.Title}>
              {props.codeMap.name}
            </Card.Title>
            <a
              href={finalUri(props.codeMap.onecodemapLink) || "#"}
              className={styles.button}
            >
              Know More
            </a>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
