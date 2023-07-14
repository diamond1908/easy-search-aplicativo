import { create } from 'apisauce'

//define a API
const api = create({
    baseURL: 'https://localhost:8080/',
    headers: {"Content-type": "application/json"}
})

export default api