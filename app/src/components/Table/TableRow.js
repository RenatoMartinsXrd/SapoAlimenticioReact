import React from 'react'

const normalizeData = (columns, data) => {
  let dataArray = []
  for (let column of columns) {
    dataArray.push(data[column.dataField])
  }
  return dataArray
}
const TableRow = ({ data, columns }) => {
  const normalizedData = normalizeData(columns, data)
  return (
    <tr>
      {normalizedData.map((item, index) => {
        return <td key={`td-${index}-${item}`}>{item}</td>
      })}
    </tr>
  )
}

export default TableRow
