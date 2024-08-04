import React from 'react'
import styles from './styles.module.css'

function tag({tagName, onClick} : {tagName: string, onClick: () => void}) {
  return (
    <button onClick={onClick} className={styles.tag}>
        {tagName}
    </button>
  )
}

export default tag
