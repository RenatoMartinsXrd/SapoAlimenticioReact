import axios from 'axios'

const url = 'http://127.0.0.1:8000'

async function findAll() {
  return axios
    .get(`${url}/alimentacao`, {
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then((result) => result?.data || [])
    .catch((error) => {
      console.error('Error:', error)
    })
}

async function post(formData) {
  return axios
    .post(`${url}/importAlimentacao`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((result) => result)
    .catch((error) => {
      console.error('Error:', error)
    })
}

const AlimentosService = {
  findAll,
  post
}

export { AlimentosService, findAll, post }
