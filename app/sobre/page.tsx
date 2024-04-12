import React from 'react'
import Header from '../src/components/_Globais/_HeaderClean/header'
import Titulo from '../src/components/_Globais/_Titulo/titulo'
import CardsSobre from '../src/components/_Sobre/_Cards/_CardsSobre/cardsSobre'
import Dots from '../src/components/_Sobre/_Cards/_CardsSobre/dots'
import CardNivel from '../src/components/_Sobre/_Cards/_CardsNivel/cardsNivel'
import Botao from '../src/components/_Globais/_BotaoSimples/botao'
import Footer from '../src/components/_Globais/_Footer/index'
import styles from './page.module.css'


const cardNiveis = [
  {
    leftBox: false,
    numItem: 1,
    titulo: "Você se inscreve",
    conteudo: "No botão em baixo você será redirecionado para um site onde pode fazer a sua inscrição para as oficinas preenchendo as suas informações.",
  },

  {
    leftBox: true,
    numItem: 2,
    titulo: "Email de confirmação",
    conteudo: "Logo que enviar um formulário um email de confirmação será enviado na sua caixa de entrada, com todas as informações necessárias.",
  },

  {
    leftBox: false,
    numItem: 3,
    titulo: "Seleção de estudantes",
    conteudo: "Assim que as aulas começarem uma atividade de nivelamento será aplicada para termos certeza que o nível que você se inscreveu te dará o melhor retorno.",
  },
]

const listBasico = [
  "Fazer algo",
  "Fazer outro Algo",
  "Fazer mais um algo",
];

const listIntermediario = [
  "Fazer algo a mais",
  "Fazer outro Algo ainda a mais",
  "Fazer mais um algo a menos",
  "Não fazer nada",
  "Latrocinio",
  "Forjar carteirinha de estudante",
  "Jogar LOL",
];


function sobre() {

  return (
    <div>
      <Header/>
      <Titulo />
      <div className={styles.containerBack}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>Passo a Passo</h1>
          </div>
          <CardsSobre
            leftBox={true}
            numItem='1'
            titulo={1}
            conteudo='No botão em baixo você será redirecionado para um site onde pode fazer a sua inscrição para as oficinas preenchendo as suas informações.'
          />
          <Dots invert={false}/>
          <CardsSobre
            leftBox={false}
            numItem='2'
            titulo={2}
            conteudo='Logo que enviar um formulário um email de confirmação será enviado na sua caixa de entrada, com todas as informações necessárias.'
          />
          <Dots invert={true}/>
          <CardsSobre
            leftBox={true}
            numItem='3'
            titulo={3}
            conteudo='Assim que as aulas começarem uma atividade de nivelamento será aplicada para termos certeza que o nível que você se inscreveu te dará o melhor retorno.'
          />
          <div className={styles.title}>
            <h1>Nível</h1>
            <p>Escolha o nível que mais se encaixa no seu, você poderá mudar isso depois, e até auxiliaremos esse processo</p>
          </div>
          <div className={styles.containerCardsNivel}>
            <CardNivel
              livro = {true}
              titulo = "BÁSICO"
              conteudo = "Para você que não teve praticamente nenhum contato com inglês e quer um ponto de partida para iniciar os seus estudos."
              listaItem={listBasico}
            />
            <CardNivel
              livro = {false}
              titulo = "ITERMEDIÁRIO"
              conteudo = "Para você que já tem conhecimento de alguns assuntos e quer aprimorar suas habilidades."
              listaItem={listIntermediario}
            />
          </div>
          <Botao titulo="Inscreva-se" href="#"/>
        </div>
      </div>      
      <Footer />
    </div>
  )
}

export default sobre