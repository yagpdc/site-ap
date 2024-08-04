'use client';
import React from 'react'
import styles from './styles.module.css'
import tag from './../_Tag/tag';
import Image from 'next/image';

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
        <form action="" className={styles.formContainer}>
            <input className={styles.filterInput} type="text" placeholder='Pesquisar...' />
            <button className={styles.buttonForm} onClick={(e) => e.preventDefault() }>
                <Image src="/search.svg" alt="search" height={24} width={24}></Image>
            </button>
        </form>
    </div>
  )
}

export default filter
