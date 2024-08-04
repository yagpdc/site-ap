'use client';
import React from 'react'
import styles from './styles.module.css'
import tag from './../_Tag/tag';

const setores = ['todos','marketing', 'apostila', 'material', 'instrutor', 'coordenação', 'desenvolvimento']
function capitalize(string: string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function filter() {
  return (
    <div className={styles.container}>
        {setores.map((setor) => (
            tag({tagName: capitalize(setor), onClick: () => {}})
        ))}
        <input type="text" placeholder='Pesquisar...' />
    </div>
  )
}

export default filter
