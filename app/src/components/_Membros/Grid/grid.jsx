import React from 'react'
import styles from './styles.module.css'

function Grid({children, style}) {
  return (
    <div className={style}>
        {children}
    </div>
  )
}

export default Grid
