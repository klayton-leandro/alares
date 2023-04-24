import axios, { Axios} from 'axios'
import { parseCookies } from "nookies";

import { apiUrl } from 'envs'

export const api: Axios = axios.create({
  baseURL: apiUrl? apiUrl: 'http://localhost:5000',
  headers: {
    'Bypass-Tunnel-Reminder': 'qwre'
  }
})

function checkValidation(response: any){

    const { 'alares.token': token } = parseCookies()

    if(token) { 
      response = {
        ...response,
        headers: {
          ...response.headers,
          ['Authorization']: `Bearer  ${token}`
        }
      }
    }

    return response
}

api.interceptors.request.use(checkValidation)