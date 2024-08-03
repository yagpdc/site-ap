import React from 'react'
import styles from "./styles.module.css";
import Navbar from '../Navbar'

function SectionTemplate({children}: {children: React.ReactNode}) {
    return (
        <div className={styles.section}>
            <Navbar />
            <div>
                {children}
            </div>
        </div>
      )
}

export default SectionTemplate
