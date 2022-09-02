import styles from "./Article.module.css"
import post1 from "../assets/post-1.png"
export function Article() {
  return (
    <>
    <div className={styles.articleSideLeft}>
      <img src={post1} />
      <span>Janeiro 04, 2022</span>
      <h2>Começando no ReactJS em 2022</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.</p>
    </div>

    <div className={styles.articleSideRight}>
      <div className={styles.startEnd}>
      <span>Janeiro 04, 2022</span>
      <h2>Conheça as principais técnicas para conseguir uma vaga internacional em programação</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.</p>
      </div>
      
      <div className={styles.rightEnd}>
      <span>Janeiro 04, 2022</span>
      <h2>Veja a evolução do Front-end na prática</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. </p>
      </div>
    </div>
    </>
  )
}