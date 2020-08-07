import React, { Component } from "react";
import TestimonialCard from "./TestimonialCard";
import "tachyons";
import Slider from "react-slick";

class Testimonial extends Component {
  render() {
    const settings = {
      dots: true,
      className: "centered",
      lazyLoad: true,
      centerMode: true,
      infinite: true,
      centerPadding: "30px",
      slidesToShow: 3, 
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
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

    const h1_style = {
      letterSpacing: "0px",
      fontSize: "2.3rem",
      fontWeight: "390",
      fontFamily: "Arial",
      textAlign: "center",
    };
    
    return (
      <div>
        <h1 className="mt6"  style={h1_style}>What Our <span style={{color: '#008dc8'}}>Students </span>Say?</h1>
        <br />
        <Slider {...settings}>
          <div>
            <TestimonialCard
              test={{
                name: "Sherley Williams",
                imgUrl: "https://picsum.photos/200",
                detail1:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos"
              }}
            />
          </div>
          <div>
            <TestimonialCard
              test={{
                name: "Sherley Williams",
                imgUrl: "https://picsum.photos/200",
                detail1:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos"
              }}
            />
          </div>
          <div >
            <TestimonialCard
              test={{
                name: "Sherley Williams",
                imgUrl: "https://picsum.photos/200",
                detail1:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos"
              }}
            />
          </div>

          <div >
            <TestimonialCard
              test={{
                name: "Sherley Williams",
                imgUrl: "https://picsum.photos/200",
                detail1:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos"
              }}
            />
          </div>
          <div >
            <TestimonialCard
              test={{
                name: "Sherley Williams",
                imgUrl: "https://picsum.photos/200",
                detail1:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos"
              }}
            />
          </div>
          <div >
            <TestimonialCard
              test={{
                name: "Sherley Williams",
                imgUrl: "https://picsum.photos/200",
                detail1:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos"
              }}
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Testimonial;
