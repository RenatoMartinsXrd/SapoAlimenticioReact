import React from 'react'
import { AlimentosService } from '../../services/AlimentosService'
import styles from './TableAlimento.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from './Table.js'
const TableAlimento = () => {
  const [dataTable, setDataTable] = React.useState([])
  React.useEffect(() => {
    AlimentosService.findAll().then((result) => {
      setDataTable(result)
    })
  }, [dataTable])

  const columns = [
    {
      dataField: 'name',
      text: 'Nome',
      sort: true
    },
    {
      dataField: 'quantity',
      text: 'Quantidade',
      sort: true
    },
    {
      dataField: 'proteinas',
      text: 'Proteinas',
      sort: true
    },
    {
      dataField: 'carboidratos',
      text: 'Carboidratos',
      sort: true
    },
    {
      dataField: 'gorduras',
      text: 'Gorduras',
      sort: true
    }
  ]

  return (
    <div className={styles.containerTable}>
      {dataTable.length > 0 && (
        <Table
          optionsClasses={{ tableStyle: styles.customRowStyle }}
          theadData={columns}
          tbodyData={dataTable}
        />
      )}
    </div>
  )
}

export default TableAlimento
