import React, { ReactNode } from 'react'
import SectionTemplate from '../src/components/_Globais/_Section'
import Footer from '../src/components/_Globais/_Footer'
import Header from './../src/components/_Membros/_Header/header';



function membros() {
  return (
    <div>
      <SectionTemplate>
        <Header />
      </SectionTemplate>
        <Footer />
    </div>
  )
}

export default membros
