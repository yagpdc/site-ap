import styles from './styles/page.module.css'
import Header from './components/_Header/header'
import About from './components/_About/about'
import Feedback from './components/_Feedback/feedback'
import Footer from "./components/_Footer/footer"

export default function Home() {
  return (
    <main className={styles.main}>
      <Header titulo="Abrindo Portas Inglês para todos" subtitulo="Abra as portas do seu futuro com o inglês. Com Abrindo Portas, essa chave é 100% gratuita, e juntos, vamos transformar seus sonhos em realidade!"></Header>
      <About></About>
      <Feedback></Feedback>
      <Footer></Footer>
    </main>
  )
}
