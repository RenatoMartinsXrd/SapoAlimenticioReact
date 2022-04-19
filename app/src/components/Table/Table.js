import React from 'react'
import TableRow from './TableRow.js'
import TableHeadItem from './TableHeadItem.js'

const Table = ({
  theadData,
  tbodyData,
  optionsClasses: { tableStyle, theadStyle }
}) => {
  return (
    <table className={tableStyle}>
      <thead className={theadStyle}>
        <tr>
          {theadData.map((h) => {
            return <TableHeadItem key={h.dataField} item={h.text} />
          })}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((item) => {
          return <TableRow key={item.id} data={item} columns={theadData} />
        })}
      </tbody>
    </table>
  )
}

export default Table
