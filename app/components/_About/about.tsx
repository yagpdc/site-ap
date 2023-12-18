import React from "react";
import styles from "../../styles/About/about.module.css";
import Carousel from "./carousel";
import cards from "../../Helpers/cards";

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
