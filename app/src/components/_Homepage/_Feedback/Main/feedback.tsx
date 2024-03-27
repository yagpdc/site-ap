import React from "react";
import styles from "../Main/feedback.module.css"
import VerticalMode from "../verticalCarousel/verticalCarrousel";

function Feedback() {
  return (
    <div className={styles.feedback}>
      <div className={styles.blank}></div>
      <div className={styles.feedback}>
        <h1 className={styles.title}>Feedback dos alunos</h1>
        <div className={styles.vertical_carousel_container}>
          <VerticalMode />
        </div>
      </div>
    </div>
  );
}

export default Feedback;
