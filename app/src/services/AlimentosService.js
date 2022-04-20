import axios from 'axios'

const data = [
  {
    id: '9d08c3d5-19260-5445-98b7-51fa4fcbadaa',
    name: 'Arroz Branco',
    quantity: 100,
    proteinas: 5,
    carboidratos: 62,
    gorduras: 5
  },
  {
    id: '9d08c3d5-19322360-5445-98b7-51fa4fcbadaa',
    name: 'Salmão',
    quantity: 100,
    proteinas: 5,
    carboidratos: 62,
    gorduras: 5
  },
  {
    id: '9d08c3d5-196223110-5445-98b7-51fa4fcbadaa',
    name: 'Queijo Parmesão',
    quantity: 100,
    proteinas: 5,
    carboidratos: 62,
    gorduras: 5
  }
]
const http = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  headers: {
    'Content-type': 'application/json'
  }
})

async function findAll() {
  return await http.get('/alimentacao')
}

const AlimentosService = {
  findAll
}

export { AlimentosService, findAll }
