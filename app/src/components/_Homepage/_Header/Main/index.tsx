import React, { ReactNode } from "react";
import Button from "../Button";
import styles from "./styles.module.css";
import Navbar from "../../../_Globais/Navbar";
import Image from "next/image";
import Section from "../../../_Globais/_Section";

interface SectionProps {
  titulo: string;
  subtitulo: string;
  children?: ReactNode;
}

function Header(props: SectionProps) {
  return (
    <div className={styles.header}>
      <Navbar></Navbar>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.titulo}>{props.titulo}</h1>
          <p className={styles.subtitulo}>{props.subtitulo}</p>
          <Button
            texto="Saiba mais"
            href="/saibamais"
            svg={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.1918 15.7565C18.5538 14.233 20.1176 11.5786 20.1176 8.55882C20.1176 3.83192 16.2857 0 11.5588 0C6.83192 0 3 3.83192 3 8.55882C3 11.5786 4.56386 14.233 6.92588 15.7565L6.37475 21.8189C6.26827 22.9902 7.19047 24 8.36654 24H14.7511C15.9272 24 16.8494 22.9902 16.7429 21.8189L16.1918 15.7565Z"
                  fill="#211F45"
                />
              </svg>
            }
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/ArteHeroDesktop.svg"
            alt="ghost"
            width={700}
            height={600}
          ></Image>
        </div>
      </div>
      <div className={styles.blank}>
        <h1 className={styles.title}>O que oferecemos</h1>
      </div>
    </div>
  );
}

export default Header;
