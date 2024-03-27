import React from "react";
import styles from "./button.module.css";
import Link from "next/link";


interface ButtonProps {
  texto: string;
  href: string;
  svg?: any;
}

function Button(props: ButtonProps) {
  return (
    <Link href={props.href} className={styles.button}>
      <span>
      {props.texto}
      </span>
      {props.svg}
    </Link>
  );
}

export default Button;
