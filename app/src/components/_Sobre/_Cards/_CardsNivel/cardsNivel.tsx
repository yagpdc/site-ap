import styles from './cardNivel.module.css'
import React, { ReactNode } from "react"

interface SectionProps {
    livro: boolean;
    titulo: string;
    conteudo: string;
    listaItem: string[];
    children?: ReactNode;
}

interface ListProps {
    item: string;
    children?: ReactNode;
}

function Listas(props: ListProps){
    return(
        <div className={styles.itens}><span className={styles.check}>✔</span>{props.item}.</div>
    )
}

function CardNivel (props: SectionProps){

    return (
        <div className={styles.container}>
            <div className={ props.livro ? styles.item1 : styles.item2}></div>
            <div className={styles.title}>{props.titulo}</div>
            <div className={styles.conteudo}>{props.conteudo}</div>
            <div className={styles.linha}></div>
            <div className={styles.lista}>
                {props.listaItem.map((item, index) => (
                    <Listas key={index} item={item} />
                ))}

            </div>
            <div className={styles.linha}></div>
        </div>
    )
}

export default CardNivel