import Header from './src/components/_Homepage/_Header/Main/header'
import About from './src/components/_Homepage/_About/Main/about'
import Feedback from './src/components/_Homepage/_Feedback/Main/feedback'
import Footer from "./src/components/_Globais/_Footer/footer"
import Examples from '../app/src/components/_Globais/examples'
export default function Home() {
  return (
    <main className="main">
      <Header titulo="Abrindo Portas Inglês para todos" subtitulo="Abra as portas do seu futuro com o inglês. Com Abrindo Portas, essa chave é 100% gratuita, e juntos, vamos transformar seus sonhos em realidade!"></Header>
      <About></About>
      <Examples />
      <Feedback></Feedback>
      <Footer></Footer>
    </main>
  )
}
