import axios from 'axios';

//baseURL: parte da url que vai ser mantida entre todas as chamadas
const api = axios.create({
    baseURL: ' http://localhost:3333/',
})

export default api;