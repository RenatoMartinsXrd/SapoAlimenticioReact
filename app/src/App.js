import React from 'react'
import Topbar from './components/Topbar.js'
import Banner from './components/Banner.js'
import TableAlimento from './components/Table/TableAlimento.js'
import FileUploadPage from './components/FileUploadPage.js'
import { GlobalStorage } from './contexts/GlobalContext.js'

function App() {
  return (
    <div className="App">
      <GlobalStorage>
        <Topbar />
        <Banner />
        <FileUploadPage />
        <TableAlimento />
      </GlobalStorage>
    </div>
  )
}

export default App
