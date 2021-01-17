import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
import TestimonialContent from "./TestimonialContent";
import styles from "../CSS/TestimonialCard.module.css"

class Testimonial extends Component {
  render() {
    const sliderSettings = {
      adaptiveHeight: false,
      dots: true,
      className: "centered",
      lazyLoad: true,
      centerMode: false,
      infinite: true,
      centerPadding: "30px",
      slidesToShow: 3,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            centerMode: true,
            slidesToShow: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <>
        <Container>
          <h1
            style={{
              textAlign: "center",
              margin: "2rem 0 4rem 0",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            What Our <span style={{ color: "#008dc8" }}>Students </span>Say?
          </h1>
        </Container>

        <Container
          style={{ minWidth: "97%" /* `fluid` would make viewport overflow */ }}
        >
          <Slider {...sliderSettings}>
            {TestimonialContent.map((user, i) => {
              return (
                <div className="container">
                  <TestimonialCard {...user} />
                </div>
              );
            })}
          </Slider>
        </Container>

        <Container>
          <br/>
          <br/>

          <a href = "/reviews">
            <p className = {styles.Reviews}>
              View more reviews
            </p>
          </a>
        </Container>
      </>
    );
  }
}

export default Testimonial;
