import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <div className={styles.footer}>
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={517}
          height={72}
          className={styles.logo}
        ></Image>
        <p className={styles.footer__text}>Contato</p>
        <p className={styles.footer__info}>
          Rua Santos dummont, universidade tecnologica federal do parana
        </p>
        <div className={styles.footer__icon}>
          <Link href="https://www.instagram.com/abrindoportascp/">
            <Image
              src="/instaIcon.svg"
              alt="instagram"
              width={16}
              height={16}
            ></Image>
          </Link>
          <Link href="https://www.linkedin.com/company/abrindoportascp/">
            <Image
              src="/linkedinIcon.svg"
              alt="linkedin"
              width={16}
              height={16}
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
