import axios from "axios"

export const api = axios.create({
  baseURL: 'http://189.6.25.219:3333'
})