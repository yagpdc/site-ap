import React from "react";
import styles from "../Main/styles.module.css";
import Carousel from "../Carousel";
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
