import Axios from 'axios'
import utils from './utils'
const BASE_URL = 'http://'
const BASE_URI = 'http://'
const SERVER_TIMEOUT = 10000
let constants = Axios.create({
  baseURL: BASE_URL,
  timeout: SERVER_TIMEOUT
})
function fetch (url, params) {
  let headers = {
    'Content-Type': 'application/json'
  }
  if (utils.database.token) {
    headers.Authorization = `Bearer ${utils.database.token}`
  }
  return constants
    .get(url, { params }, { headers })
    .then(res => {
      console.log('res: ', res)
      return res.data
    })
    .catch(error => {
      console.log('error: ', error.response)
    })
}
function put (url, params) {
  let headers = {
    'Content-Type': 'application/json'
  }
  if (utils.database.token) {
    headers.Authorization = `Bearer ${utils.database.token}`
  }
  return constants
    .put(url, params, { headers })
    .then(res => {
      console.log('res: ', res)
      return res.data
    })
    .catch(error => {
      console.log('error: ', error.response)
    })
}
function post (url, params) {
  let headers = {
    'Content-Type': 'application/json'
  }
  if (utils.database.token) {
    headers.Authorization = `Bearer ${utils.database.token}`
  }
  return constants
    .post(url, params, { headers })
    .then(res => {
      console.log('res: ', res)
      return res.data
    })
    .catch(error => {
      console.log('error: ', error.response)
    })
}
function removeRequest (url) {
  let headers = {
    'Content-Type': 'application/json'
  }
  if (utils.database.token) {
    headers.Authorization = `Bearer ${utils.database.token}`
  }
  return constants
    .delete(url, { headers })
    .then(res => {
      console.log('res: ', res)
      return res.data
    })
    .catch(error => {
      console.log('error: ', error.response)
    })
}
export default {
  PATH: {
    LOGIN: 'login',
    REGISTER: 'register'
  },
  fetch,
  put,
  post,
  removeRequest,
  BASE_URI,
  BASE_URL
}
