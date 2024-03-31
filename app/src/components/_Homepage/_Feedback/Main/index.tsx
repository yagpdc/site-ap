import React from "react";
import styles from "../Main/styles.module.css"
import VerticalMode from "../verticalCarousel";

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
