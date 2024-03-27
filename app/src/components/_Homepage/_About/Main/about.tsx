import React from "react";
import styles from "../Main/about.module.css";
import Carousel from "../Carousel/carousel";
import cards from "../../../../Helpers/cards";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <div className={styles.carousel}>
          <Carousel cards={cards} />
        </div>
      </div>
    </div>
  );
}

export default About;
