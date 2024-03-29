"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const rotas = ["/", "/sobre", "/membros", "/contato", "/eventos"]
  const rotasNomes = ["Home", "Sobre", "Membros", "Contato", "Eventos"]

  const pathname = usePathname();



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
            {rotas.map((rota, index) => (
              <button
                key={index}
                className={`${styles.item} ${pathname === rota ? styles.active : ''}`} 
                type="button"
                onClick={() => {
                  router.push(rota);
                }}
              >
                {rotasNomes[index]}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}