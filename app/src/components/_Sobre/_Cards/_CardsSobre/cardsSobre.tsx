import React, { ReactNode, useEffect, useRef, useState } from 'react';
import styles from './cardsSobre.module.css'

interface SectionProps {
    leftBox: boolean;
    numItem: string;
    titulo: number;
    conteudo: string;
    children?: ReactNode;
}

function textCards(a: number){

    switch (a){

        case 1:
            return (
                <h2>Você se <span className={styles.marker}>Inscreve</span></h2>
            )
        break;

        case 2:
            return (
                <h2><span className={styles.marker}>Email</span> de confirmação</h2>
            )
        break;

        case 3:
            return (
                <h2><span className={styles.marker}>Seleção</span> de estudantes</h2>
            )
        break;
    }
}



function CardsSobre(props: SectionProps){
    return (
        <div id="Cards" className={props.leftBox ? styles.containerLeft : styles.containerRight}>
        <div className={styles.fechadura}>
            <h3>{props.numItem}</h3>
        </div>
        <div className={styles.text}>
            {textCards(props.titulo)}
            <p>{props.conteudo}</p>
        </div>
        </div>
    )
}

CardsSobre.defaultProps = {
    numItem: "0",
    titulo: "Título Card",
    conteudo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem nisi vero, minus temporibus voluptates at vitae saepe doloremque, velit veritatis quos blanditiis. i"
}

export default CardsSobre