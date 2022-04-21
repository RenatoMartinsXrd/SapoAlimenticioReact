import React from 'react'
import styles from './FileUploadPage.module.css'
import { AlimentosService } from '../services/AlimentosService'
import { GlobalContext } from '../contexts/GlobalContext'
const FileUploadPage = function () {
  const { setDataTable } = React.useContext(GlobalContext)
  const handleSubmission = (event) => {
    const formData = new FormData()

    const file = event.target.files[0]
    if (file.type !== 'text/plain') {
      alert('Só é possível importar um arquivo de texto')
      return
    }
    formData.append('file', file)
    AlimentosService.post(formData).then(() =>
      AlimentosService.findAll().then((result) => setDataTable(result))
    )
  }

  return (
    <div className={styles.container}>
      <p>Importe um arquivo txt de alimentos</p>
      <div className={styles.containerFileUpload}>
        <label htmlFor="file" className={styles.labelFile}>
          Enviar arquivo
        </label>
        <input
          type="file"
          name="file"
          id="file"
          onChange={handleSubmission}
        ></input>
      </div>
    </div>
  )
}

export default FileUploadPage
