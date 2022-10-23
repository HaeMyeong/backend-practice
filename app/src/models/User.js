'use strict';

const UserStorage = require('./UserStorage')

class User {
  constructor(body) {
    this.body = body
  };

  login() {
    const body = this.body
    const { id, password } = UserStorage.getUserInfo(body.id)

    if (!id) return { success: false, message: '존재하지 않는 아이디 입니다' }

    if (id === body.id && password === body.password) {
      return { success: true }
    }

    return { success: false, message: '비밀번호가 틀렸습니다' }
  }

  register() {
    try {
      const response = UserStorage.save(this.body);
      return response
    } catch (e) {
      console.log(e)
      return { success: false, message: e }
    }
  }
};

module.exports = User;