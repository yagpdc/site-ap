"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import Comment from "../Comments";
import commentData from "../../../../Helpers/comments";
import styles from "../Main/styles.module.css";

export default class VerticalMode extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 6000,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      autoplay: true,
      autoplaySpeed: 6000,
      pauseOnHover: false,
      verticalSwiping: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
            },
          },
        ],
    };
    return (
      <div className={styles.feedback}>
        <Slider {...settings} className={styles.slide}>
          {commentData.map((comment: any, index: any) => (
            <Comment
              key={index}
              comments={comment.comments}
              translation={comment.translation}
              name={comment.name}
              info={comment.info}
              className={comment.className}
              image={comment.image}
              headerStyle={comment.headerStyle}
              nameStyle={comment.nameStyle}
              infoStyle={comment.infoStyle}
              textStyle={comment.textStyle}
              translationStyle={comment.translationStyle}
            />
          ))}
        </Slider>
      </div>
    );
  }
}
