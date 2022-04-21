import React from 'react'
import TableRow from './TableRow.js'
import TableHeadItem from './TableHeadItem.js'

const Table = ({
  theadData,
  tbodyData,
  optionsClasses: { tableStyle, theadStyle, headItemStyle, rowItemStyle }
}) => {
  return (
    <table className={tableStyle}>
      <thead className={theadStyle}>
        <tr>
          {theadData.map((h) => {
            return (
              <TableHeadItem
                key={h.dataField}
                item={h.text}
                className={headItemStyle}
              />
            )
          })}
        </tr>
      </thead>
      {tbodyData.length > 0 && (
        <tbody>
          {tbodyData.map((item) => {
            return (
              <TableRow
                key={item.id}
                data={item}
                columns={theadData}
                className={rowItemStyle}
              />
            )
          })}
        </tbody>
      )}

      {tbodyData.length === 0 && (
        <tbody
          style={{
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <tr
            style={{
              padding: '20px',
              width: '100%',
              position: 'relative',
              left: '75%',
              fontSize: '1em'
            }}
          >
            <td>A tabela não possui dados para mostrar</td>
          </tr>
        </tbody>
      )}
    </table>
  )
}

export default Table
