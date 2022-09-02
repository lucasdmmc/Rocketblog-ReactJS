import styles from "./Header.module.css"
import logo from "../assets/logo.svg"
import search from "../assets/search.svg"

export function Header() {
  return (
    <header className={styles.wrapper}>
      <img src={logo} alt="Logo" />

      <div className={styles.menu}>
        <a href="">Home</a>
        <a href="">Sobre</a>
        <a href="">Categorias</a>
        <a href="">Contato</a>
      </div>

      <div className={styles.inputAndButton}>
        <input type="text" placeholder="Buscar"/>
        <button>
          <img src={search} alt="" />
        </button>
      </div>
    </header>
  )
}