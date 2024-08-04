import React from 'react'
import styles from './styles.module.css'


function Main({title} : {title: string}) {
  return (

    <div className={styles.container}>
        <h1 className={styles.title}>
            {title}
        </h1>
    </div>
  )
}

export default Main
