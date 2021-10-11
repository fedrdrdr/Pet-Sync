import instance from '../http/index'
import axios from 'axios'
import { API_URL } from '../http/index'

export default class AuthService {
  static async login(email, password) {
    return instance.post('/login', { email, password })
  }

  static async registration(email, password) {
    return instance.post('/registration', { email, password })
  }

  static async logout() {
    return instance.post('/logout')
  }

  static async checkAuth() {
    const response = await axios.get(`${API_URL}/refresh`, {
      withCredentials: true,
    })
    localStorage.setItem('token', response.data.accessToken)
    return response
  }
}
