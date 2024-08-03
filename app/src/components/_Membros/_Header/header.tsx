import React from 'react'
import styles from './styles.module.css'
import Box from './../../_Globais/_Shapes/square/index';

function header() {
  return (
    <div  className={styles.container}>
        <div className={styles.rImgBox}>
            <Box />
            <Box />
        </div>
        <div className={styles.content}>
            <h1 className={styles.title}>Membros</h1>
            <h1 className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h1>
        </div>
        <div className={styles.lImgBox}>
            <Box />
            <Box />
        </div>
    </div>
  )
}

export default header
