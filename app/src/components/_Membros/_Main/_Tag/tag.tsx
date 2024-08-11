import React from 'react'
import styles from './styles.module.css'

function Tag({tagName, onClick, isActive} : {tagName: string, onClick: () => void, isActive: boolean;}) {
  return (
    <button onClick={onClick}
    className={styles.tag}
    style={{
        borderBottom: isActive ? '5px solid #F07A7A' : '0px'
    }}
    >
        {tagName}
    </button>
  )
}

export default Tag
