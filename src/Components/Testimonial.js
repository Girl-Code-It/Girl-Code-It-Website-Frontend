import React, { Component } from "react";
import TestimonialCard from "./TestimonialCard";
import Styles from "../Css/testimonial.module.css";
import "tachyons";
import Slider from "react-slick";
import Data from "../assets/data.json";

class Testimonial extends Component {
  render() {
    const settings = {
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
          breakpoint: 1024,
          settings: {
            centerMode: true,
            slidesToShow: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ],
    };
    return (
      <div className="wrapper">
        <h1 className={`mt6 ${Styles.heading}`}>What Our <span className={Styles.highlighted}>Students </span>Say?</h1>
        <br />
        <Slider {...settings}>
          {
            Data.map((user, i) => {
              return (
                <div className="container">
                  <TestimonialCard 
                    test = {{
                      key: `${i}`,
                      id: `${Data[i].id}`,
                      name: `${Data[i].name}`,
                      imgUrl: `https://api.adorable.io/avatars/${Data[i].id}`,
                      summary: `${Data[i].summary}`
                    }}
                  />
                </div>
              );
            })
          }
        </Slider>
      </div>
    );
  }
}

export default Testimonial;
