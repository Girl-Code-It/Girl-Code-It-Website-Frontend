import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  Image,
  Row,
  Col,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import styles from "../CSS/QuestionsForm.module.css";
import questionsForm from "../assets/questionsForm.png";

const FORMSPREE_URL = "https://formspree.io/f/mqkgwley";

export default class QuestionsForm extends Component {
  constructor(props) {
    super(props);

    // state
    this.state = {
      error: null,
      hasSubmissionSucceed: false,
    };

    // refs
    this.submitButtonRef = React.createRef();
    this.formRef = React.createRef();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const doc = {};

    for (let [key, val] of formData) {
      doc[key] = val;
    }

    this.submitButtonRef.current.innerText = "Submitting...";

    try {
      const resp__raw = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: JSON.stringify(doc),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!resp__raw.ok) {
        this.setState({
          error: "Something went wrong while submitting data",
          hasSubmissionSucceed: false,
        });
      }

      this.setState({ error: null, hasSubmissionSucceed: true });
      this.formRef.current.reset();
    } catch (err) {
      console.log(err.message);
      this.setState({ error: err.message, hasSubmissionSucceed: false });
    } finally {
      this.submitButtonRef.current.innerText = "Submit";
    }
  };

  render() {
    return (
      <Jumbotron
        id="contact"
        style={{ paddingTop: "0px", backgroundColor: "#ffffff" }}
      >
        <Container fluid="sm">
          <h1 className={styles.Heading}>
            Still have some <span style={{ color: "#008dc8" }}>Questions</span>?
          </h1>
          <Row
            className="justify-content-md-center"
            style={{ marginTop: "50px" }}
          >
            <Col md={"auto"} lg={6}>
              <Image src={questionsForm} alt="QuestionsForm" fluid />
            </Col>
            <Col lg={5}>
              {/* feedback messages */}
              {this.state.hasSubmissionSucceed && (
                <Alert variant="success">
                  Successfully Submitted Your Query
                </Alert>
              )}

              {this.state.error && (
                <Alert variant="danger">{this.state.error}</Alert>
              )}

              <Form onSubmit={this.handleSubmit} ref={this.formRef}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="name"
                    defaultValue=""
                    placeholder="Name"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    defaultValue=""
                    placeholder="What's your email?"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    name="question"
                    defaultValue=""
                    placeholder="Your question..."
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Button
                    ref={this.submitButtonRef}
                    className={styles.Button}
                    type="submit"
                  >
                    Send Message
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
