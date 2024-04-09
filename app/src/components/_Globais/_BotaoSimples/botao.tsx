import React, { ReactNode } from "react"
import Link from "next/link";
import styles from "./botao.module.css"

interface SectionProps {
    titulo: string;
    href: string;
    children?: ReactNode;
}

function Botao (props: SectionProps){
    return(
        <Link className={styles.container} href={props.href}>
            <h3>{props.titulo}</h3>
        </Link>
    )
}

export default Botao