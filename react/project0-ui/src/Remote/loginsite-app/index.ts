//index setting up base axios client
import axios from 'axios'

export const siteLoginClient = axios.create({
baseURL: 'http://localhost:2006',
headers:{
'Content-type': 'application/json'
},
withCredentials:true
})