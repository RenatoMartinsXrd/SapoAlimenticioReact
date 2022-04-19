import React from 'react'
import Topbar from './components/Topbar.js'
import Banner from './components/Banner.js'
import TableAlimento from './components/Table/TableAlimento.js'
function App() {
  return (
    <div className="App">
      <Topbar />
      <Banner />
      <TableAlimento />
    </div>
  )
}

export default App
