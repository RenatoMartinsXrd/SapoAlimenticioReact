import React from 'react'
import styles from './Topbar.module.css'

import logo from '../assets/logo.png'
import { GlobalContext } from '../contexts/GlobalContext'
import { AlimentosService } from '../services/AlimentosService'
const Topbar = () => {
  const { setDataTable } = React.useContext(GlobalContext)
  const [active, setActive] = React.useState(null)

  const handleStyleMenu = (target) => {
    target.style.color = '#000'
    if (active) active.style.color = '#fff'
    setActive(target)
  }
  const handleMax = (key) => {
    function compare(a, b) {
      if (a[key] > b[key]) {
        return -1
      }
      if (a[key] < b[key]) {
        return 1
      }
      return 0
    }

    AlimentosService.findAll().then((data) => {
      let table = data.sort(compare)
      let first = table[0]
      let result = []
      for (let alimento of table) {
        if (alimento[key] !== first[key]) {
          break
        }
        result.push(alimento)
        first = alimento
      }
      setDataTable(result)
    })
  }

  const handleAllAlimentos = () => {
    AlimentosService.findAll().then((result) => setDataTable(result))
  }
  return (
    <header>
      <nav className={styles.containerNav}>
        <div className={styles.containerHome}>
          <div className={styles.containerLogo}>
            <img src={logo} alt="" />
          </div>

          <div className={styles.lineIcon} />
          <h2
            onClick={() => {
              handleAllAlimentos()
              active.style.color = '#fff'
            }}
          >
            Home
          </h2>
        </div>

        <ul className={styles.containerMenu}>
          <li
            onClick={(e) => {
              handleMax('proteins')
              handleStyleMenu(e.target)
            }}
          >
            Proteínas
          </li>
          <li
            onClick={(e) => {
              handleMax('carbohydrates')
              handleStyleMenu(e.target)
            }}
          >
            Carboidratos
          </li>
          <li
            onClick={(e) => {
              handleMax('fat')
              handleStyleMenu(e.target)
            }}
          >
            Gorduras
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Topbar
