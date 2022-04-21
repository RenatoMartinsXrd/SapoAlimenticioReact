import React from 'react'
import { AlimentosService } from '../../services/AlimentosService'
import styles from './TableAlimento.module.css'
import Table from './Table.js'
import { GlobalContext } from '../../contexts/GlobalContext'
const TableAlimento = () => {
  const { dataTable, setDataTable } = React.useContext(GlobalContext)
  React.useEffect(() => {
    AlimentosService.findAll().then((result) => setDataTable(result || []))
  }, [setDataTable])

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
      <Table
        optionsClasses={{
          tableStyle: styles.customTableStyle,
          theadStyle: styles.customTheadStyle,
          headItemStyle: styles.customHeadItemStyle,
          rowItemStyle: styles.customRowItemStyle
        }}
        theadData={columns}
        tbodyData={dataTable}
      />
    </div>
  )
}

export default TableAlimento
