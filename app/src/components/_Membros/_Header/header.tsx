import React from 'react'
import styles from './styles.module.css'
import Box from './../../_Globais/_Shapes/square/index';
import Image from 'next/image';
type headerProps = {
    title: string;
    subtitles: string;
}

function header({ title, subtitles} : headerProps) {
  return (
    <div  className={styles.container}>
        <div className={styles.rImgBox}>
        <Image
            src="/placeholder-membro.png"
            alt="placeholder"
            width={200}
            height={200}
          ></Image>
        </div>
        <div className={styles.content}>
            <h1 className={styles.title}>{title}</h1>
            <h1 className={styles.subtitle}>
                {subtitles}
            </h1>
        </div>
        <div className={styles.lImgBox}>
        <Image
            src="/placeholder-membro.png"
            alt="placeholder"
            width={200}
            height={200}
          ></Image>
        </div>
    </div>
  )
}

export default header
