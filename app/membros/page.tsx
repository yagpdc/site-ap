import React, { ReactNode } from 'react'
import SectionTemplate from '../src/components/_Globais/_Section'
import Footer from '../src/components/_Globais/_Footer'
import Header from './../src/components/_Membros/_Header/header';
import Main from './../src/components/_Membros/_Main/_Main/main';
import Filter from './../src/components/_Membros/_Main/_Filter/filter';



function membros() {
  return (
    <div>
      <SectionTemplate>
        <Header
            title='Membros'
            subtitles='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
      </SectionTemplate>
        <Main
            title='Conheça nossos membros'
        >
        <div>
            <Filter />
        </div>
        </Main>
        <Footer />
    </div>
  )
}

export default membros
