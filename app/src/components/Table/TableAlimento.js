import React from 'react'
import { AlimentosService } from '../../services/AlimentosService'
import styles from './TableAlimento.module.css'
import Table from './Table.js'
const TableAlimento = () => {
  const [dataTable, setDataTable] = React.useState([])
  React.useEffect(() => {
    async function fetchAlimentacao() {
      const response = await AlimentosService.findAll()
      setDataTable(response.data)
    }
    fetchAlimentacao()
  }, [])

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
      dataField: 'proteins',
      text: 'Proteinas',
      sort: true
    },
    {
      dataField: 'carbohydrates',
      text: 'Carboidratos',
      sort: true
    },
    {
      dataField: 'fat',
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
