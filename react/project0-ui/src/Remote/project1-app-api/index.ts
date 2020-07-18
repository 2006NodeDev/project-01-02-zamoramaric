//index setting up base axios client
import axios from 'axios'

export const Project1Client = axios.create({
baseURL: 'http://localhost:2006',
headers:{
'Content-Type': 'application/json'
},
withCredentials:true
})