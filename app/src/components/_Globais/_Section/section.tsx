import React from 'react'
import styles from "./section.module.css";
import Navbar from '../Navbar/navbar'

function HeroTemplate({children}: {children: React.ReactNode}) {
    return (
        <div className={styles.section}>
            <Navbar />
            <div>
                {children}
            </div>
        </div>
      )
}

export default HeroTemplate