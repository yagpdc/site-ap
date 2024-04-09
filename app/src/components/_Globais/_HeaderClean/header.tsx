import styles from "./header.module.css";
import Navbar from "../Navbar/index";


function Section() {
  return (
    <div className={styles.header}>
      <Navbar></Navbar>
    </div>
  );
}

export default Section;
