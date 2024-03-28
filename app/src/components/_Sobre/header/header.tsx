import React from 'react'
import Navbar from '../../_Globais/Navbar/navbar'
import styles from './header.module.css'

function header() {
  return (
    <div className={styles.header}>
        <Navbar></Navbar>
    </div>
  )
}

export default header