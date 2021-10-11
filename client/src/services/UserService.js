import instance from '../http/index'

export default class UserService {
  static fetchUsers() {
    return instance.get('/users')
  }
}
 