import React from 'react'
import styles from './Topbar.module.css'

import logo from '../assets/logo.png'
const Topbar = () => {
  return (
    <header>
      <nav className={styles.containerNav}>
        <div className={styles.containerHome}>
          <div className={styles.containerLogo}>
            <img src={logo} alt="" />
          </div>

          <div className={styles.lineIcon} />
          <h2>Home</h2>
        </div>

        <ul className={styles.containerMenu}>
          <li>Proteínas</li>
          <li>Carboidratos</li>
          <li>Gorduras</li>
        </ul>
      </nav>
    </header>
  )
}

export default Topbar
