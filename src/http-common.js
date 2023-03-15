import axios from 'axios'

export default axios.create({
    baseURL: "https://127.0.0.1:8443/api",
    headers: {  "Content-type": "application/json"  }
})