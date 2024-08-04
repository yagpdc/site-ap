'use client';
import React, {useState} from 'react'
import styles from './styles.module.css'
import Tag from './../_Tag/tag';
import Image from 'next/image';


const setores = ['todos','marketing', 'apostila', 'material', 'instrutor', 'coordenação', 'desenvolvimento']



function Filter() {
    const [value, setValue] = useState<string>('')

    function handleInput(e: any){
        setValue(e.target.value)
    }

    function capitalize(string: string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function handleSearch(e: any){
        e.preventDefault()
        if(value === '') return
        console.log(value)
    }


  return (
    <div className={styles.container}>
        {setores.map((setor) => (
            Tag({tagName: capitalize(setor), onClick: () => {console.log(setor)}})
        ))}
        <form action="" className={styles.formContainer}>
            <input className={styles.filterInput} onChange={handleInput} type="text" placeholder='Pesquisar...' />
            <button className={styles.buttonForm} onClick={handleSearch}>
                <Image src="/search.svg" alt="search" height={24} width={24}></Image>
            </button>
        </form>
    </div>
  )
}

export default Filter
