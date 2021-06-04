import axios from 'axios'

axios.defaults.withCredentials = true

export default axios.create({
  // baseURL: "http://192.168.1.153:3001/api",
  // baseURL: "http://localhost:3001/api",
  baseURL: "http://api.helpdesk/api",
  headers: {
    "Content-type": "application/json"
  }
})