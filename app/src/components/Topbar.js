import React from 'react'
import styles from './Topbar.module.css'

import logo from '../assets/logo.png'
import { GlobalContext } from '../contexts/GlobalContext'
import { AlimentosService } from '../services/AlimentosService'
const Topbar = () => {
  const { setDataTable } = React.useContext(GlobalContext)

  const handleMax = (key) => {
    console.log('OPA')
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
      console.log('JJKAKSAK')
      let table = data.sort(compare)
      let first = table[0]
      let result = []
      for (let alimento of table) {
        console.log('IOAAOOAOAS')
        if (alimento[key] !== first[key]) {
          break
        }
        result.push(alimento)
        first = alimento
      }
      console.log(result)
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
          <h2 onClick={handleAllAlimentos}>Home</h2>
        </div>

        <ul className={styles.containerMenu}>
          <li onClick={() => handleMax('proteins')}>Proteínas</li>
          <li onClick={() => handleMax('carbohydrates')}>Carboidratos</li>
          <li onClick={() => handleMax('fat')}>Gorduras</li>
        </ul>
      </nav>
    </header>
  )
}

export default Topbar
