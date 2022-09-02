import { Header } from "./components/Header"
import { Section } from "./components/Section"
import { Article } from "./components/Article"
import "./global.css"
import styles from "./App.module.css"
import { Footer } from "./components/Footer"
export function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />

        <Section />
      </div>
      <div className={styles.wrapperArticle}>
        <Article />
      </div>
      <div className={styles.wrapperFooter}>
        <Footer />
      </div>
    </>
  )
}
