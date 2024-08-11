'use client'
import React from 'react';
import SectionTemplate from '../src/components/_Globais/_Section';
import Footer from '../src/components/_Globais/_Footer';
import Header from './../src/components/_Membros/_Header/header';
import Main from './../src/components/_Membros/_Main/_Main/main';
import Filter from './../src/components/_Membros/_Main/_Filter/filter';
import Card from './../src/components/_Membros/_Main/_Card/Card';
import Grid from './../src/components/_Membros/Grid/grid';
import membros_data from '../src/Helpers/membros';
import styles from './styles.module.css'

function Membros() {
    const [filteredSetor, setFilteredSetor] = React.useState<string>('todos');
    const [searchTerm, setSearchTerm] = React.useState<string>('');

    function handleSetorChange(setor: string) {
        setFilteredSetor(setor);
    }

    function handleSearchChange(searchTerm: string) {
        setSearchTerm(searchTerm);
    }

    const filteredData = membros_data.filter(member => {
        const matchesSetor = filteredSetor === 'geral' || member.setor.toLowerCase() === filteredSetor.toLowerCase();
        const matchesSearch = member.nome.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSetor && matchesSearch;
    });

    return (
        <div style={{backgroundColor: "white"}}>
            <SectionTemplate>
                <Header
                    title='Membros'
                    subtitles='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                />
            </SectionTemplate>
            <Main title='Conheça nossos membros'>
                <div>
                    <Filter
                        onSetorChange={handleSetorChange}
                        onSearchChange={handleSearchChange}
                    />
                </div>
                <Grid style={styles.grid}>
                    {filteredData.length > 0 ? (
                        filteredData.map((item, idx) => (
                            <Card
                                key={idx}
                                nome={item.nome}
                                imagem={item.imagem}
                                data={item.data}
                                setor={item.setor}
                            />
                        ))
                    ) : (

                        <h3 className={styles.noMembers}>Não encontramos nenhum membro que corresponda à sua busca</h3>

                    )}
                </Grid>
                <Footer />
            </Main>
        </div>
    );
}

export default Membros;
