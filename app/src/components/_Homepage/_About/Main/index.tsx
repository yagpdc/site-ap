import React from "react";
import styles from "../Main/styles.module.css";
import Carousel from "../Carousel";
import cards from "../../../../Helpers/cards";
import Image  from 'next/image';

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <div className={styles.img_vetor}>
          <Image src='/menina_homepage.svg' height={600} width={600} alt='menina vetor'></Image>
        </div>
        <div className={styles.carousel}>
          <Carousel cards={cards} />
        </div>
      </div>
    </div>
  );
}

export default About;
