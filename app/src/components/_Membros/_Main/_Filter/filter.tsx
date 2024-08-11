'use client';
import React, {useState} from 'react'
import styles from './styles.module.css'
import Tag from './../_Tag/tag';
import Image from 'next/image';


const setores = ['todos','marketing', 'apostila', 'material', 'instrutor', 'coordenação', 'desenvolvimento']

interface FilterProps  {
    onSetorChange: (setor: string) => void;
    onSearchChange: (searchTerm: string) => void;
}

function Filter({ onSetorChange, onSearchChange }: FilterProps) {
    const [value, setValue] = useState<string>('')
    const [selectedSetor, setSeletectedSetor] = useState<string>('todos')


    function handleInput(e: React.ChangeEvent<HTMLInputElement>){
        setValue(e.target.value);
        onSearchChange(e.target.value);
    }

    function handleSetorClick(setor: string) {
        setSeletectedSetor(setor);
        onSetorChange(setor); // Passa o setor selecionado
    }

    function capitalize(string: string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function handleSearch(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(value === '') return
        onSearchChange(value)
    }


  return (
    <div className={styles.container}>
        {setores.map((setor) => (
        <Tag
          key={setor}
          tagName={capitalize(setor)}
          onClick={() => handleSetorClick(setor)}
          isActive={setor === selectedSetor}
        />
      ))}
        <form action="" className={styles.formContainer} onSubmit={handleSearch}>
            <input className={styles.filterInput}
            value={value}
            onChange={handleInput}
            type="text"
            placeholder='Pesquisar...'
            />

            <button className={styles.buttonForm} type="submit">
                <Image src="/search.svg" alt="search" height={24} width={24}></Image>
            </button>
        </form>
    </div>
  )
}

export default Filter
