"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className={styles.navBar}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src="/logo.svg" alt="logo" width={88} height={40}></Image>
            </Link>
          </div>
          <div className={styles.links}>
            <Link className={styles.item} href="/">
              Home
            </Link>
            <Link className={styles.item} href="/sobre">
              Sobre
            </Link>
            <Link className={styles.item} href="/membros">
              Membros
            </Link>
            <Link className={styles.item} href="/contato">
              Contato
            </Link>
            <Link className={styles.item} href="/eventos">
              Eventos
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
