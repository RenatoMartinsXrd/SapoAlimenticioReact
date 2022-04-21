import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({ children }) => {
  const [dataTable, setDataTable] = React.useState([])
  return (
    <GlobalContext.Provider value={{ dataTable, setDataTable }}>
      {children}
    </GlobalContext.Provider>
  )
}
