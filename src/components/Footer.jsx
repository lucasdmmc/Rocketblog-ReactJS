import styles from "./Footer.module.css"
import post2 from "../assets/post-2.png"
import post3 from "../assets/post-3.png"
import post4 from "../assets/post-4.png"

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <img src={post2} alt="" />
        <span>Janeiro 04, 2022</span>
        <h2>10 dicas para conseguir a vaga desejada</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. </p>
      </div>
      <div>
        <img src={post3} alt="" />
        <span>Janeiro 04, 2022</span>
        <h2>Deixe seu código mais semântico com essas dicas</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. </p>
      </div>
      <div>
        <img src={post4} alt="" />
        <span>Janeiro 04, 2022</span>
        <h2>Use essas dicas nas suas aplicações mobile</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. </p>
      </div>

    </footer>
  )
}