import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
interface CardProps {
    nome: string
    imagem: string
    data: string
    setor: string
    }

function Card({nome, imagem, data, setor}: CardProps) {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.circle}>
                <Image src={imagem} width={100} height={100} alt='profile'></Image>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{nome}</h1>
                <p>entrou</p>
                <h1 className={styles.info}>{data}</h1>
                <p>setor</p>
                <h1 className={styles.info}>{setor}</h1>
            </div>
        <div className={styles.icon}>
            <Image src="/locker-icon.svg" width={50} height={50} alt='profile'></Image>
        </div>
        </div>
    </div>
  )
}

export default Card
