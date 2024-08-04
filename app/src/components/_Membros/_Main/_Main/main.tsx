import React, { Children } from 'react'
import styles from './styles.module.css'


function Main({title, children} : {title: string, children: React.ReactNode}) {
  return (

    <div className={styles.container}>
        <h1 className={styles.title}>
            {title}
        </h1>
        <div>
        {children}
        </div>
    </div>
  )
}

export default Main
