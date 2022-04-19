import React from 'react'
import styles from './Banner.module.css'
import iconScroll from '../assets/iconScroll.png'
const Banner = () => {
  return (
    <section className={styles.styleContainer}>
      <div className={styles.containerTitle}>
        <h2>
          Bem-vindo ao <h1 className={styles.title}>Sapo Alimentício</h1> , aqui
          você irá encontrar informações nutricionais dos principais alimentos
          do mercado.
        </h2>
      </div>

      <div className={styles.containerScrollIcon}>
        <img src={iconScroll} alt="" />
        <img src={iconScroll} alt="" />
        <img src={iconScroll} alt="" />
        <h3 className={styles.titleScroll}>Scroll</h3>
      </div>
    </section>
  )
}

export default Banner
