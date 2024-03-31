"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card, { CardProps } from "../Card";
import styles from "./styles.module.css";

interface CarouselProps {
  cards: CardProps[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    afterChange: (currentSlide: number) => {
      setSelectedCardIndex(currentSlide);
    },
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <>
      <Slider ref={sliderRef} {...settings}>
        {cards.map((card, index) => {
          const cardStyle = {
            opacity: index !== selectedCardIndex ? 0.5 : 1,
            transition: "opacity 0.5s ease-out", 
          };
          return (
            <div key={index} id="carrossel_container">
              <Card
                title={card.title}
                subtitle={card.subtitle}
                headerImage={card.headerImage}
                altImage={card.altImage}
                style={cardStyle}
              />
            </div>
          );
        })}
      </Slider>
      <button onClick={prevSlide} className={styles.prevBtn}></button>
      <button onClick={nextSlide} className={styles.nextBtn}></button>
    </>
  );
};

export default Carousel;
