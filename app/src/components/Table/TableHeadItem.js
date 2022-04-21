import React from 'react'

const TableHeadItem = ({ item, className }) => {
  return (
    <td title={item} className={className}>
      {item}
    </td>
  )
}

export default TableHeadItem
