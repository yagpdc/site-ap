import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

interface commentsProps {
  comments: string;
  name: string;
  info: string;
  image: string;
  className?: string;
  translation: string;
  headerStyle: string;
  nameStyle: string;
  infoStyle: string;
  textStyle: string;
  translationStyle: string;
}

function Comments(props: commentsProps) {
  return (
    <div className={styles.container}>
      <div className={props.className}>
        <div className={props.headerStyle}>
          <Image src={props.image} alt="ghost" width={33} height={33}></Image>
          <div>
            <h1 className={props.nameStyle}>{props.name}</h1>
            <p className={props.infoStyle}>{props.info}</p>
          </div>
        </div>
        <div>
          <p className={props.textStyle}>
            <span></span>
            {props.comments}
            <span></span>
          </p>
          <p className={props.translationStyle}>{props.translation}</p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
