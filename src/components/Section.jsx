import styles from "./Section.module.css"
import arrow from "../assets/arrow-right.svg"
import featured from "../assets/featured-image.png"

export function Section() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.sideLeft}>
        <h1>Veja o guia definitivo para conquistar seus objetivos como DEV em 2022</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique placerat hac.</p>

        <div className={styles.ancora}>
        <a href="">
          Veja mais
          <img src={arrow} alt="" />
        </a>
        </div>
      </div>

      <div className={styles.sideRight}>
        <img src={featured} alt="" />
      </div>
    </section>
  )
}