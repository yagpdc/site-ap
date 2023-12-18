// Card.tsx
import React, { CSSProperties } from "react";
import styles from "../../styles/About/card.module.css";
import Image from "next/image";

export interface CardProps {
  title: string;
  subtitle: string;
  headerImage: string;
  altImage: string;
  style?: CSSProperties;
}

function Card(props: CardProps) {
  return (
    <div className={styles.card} style={props.style}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Image src={props.headerImage} alt={props.altImage} width={36} height={36}></Image>
        </header>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.subtitle}>{props.subtitle}</p>
      </div>
      <div className={styles.icon}>
        <Image src="/lock.svg" alt="lock" width={33} height={33} />
      </div>
    </div>
  );
}

export default Card;
