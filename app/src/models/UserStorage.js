'use strict';

const fs = require('fs')

class UserStorage {
  static #getUsers() {
    return JSON.parse(fs.readFileSync('./src/databases/users.json').toString())
  }

  static getUsers(isAll, ...fields) {
    const users = this.#getUsers();
    if (isAll) return users;

    const newUsers = fields.reduce((acc, cur) => {
      if (users.hasOwnProperty(cur)) {
        acc[cur] = users[cur];
      }
      return acc;
    }, {})
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#getUsers();
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((acc, cur) => {
      acc[cur] = users[cur][idx];
      return acc;
    }, {});

    return userInfo;
  }

  static save(userInfo) {
    const users = this.getUsers(true)

    if (users.id.includes(userInfo.id)) throw '이미 존재하는 아이디 입니다';

    users.id.push(userInfo.id);
    users.password.push(userInfo.password);

    fs.writeFileSync('./src/databases/users.json', JSON.stringify(users, null, 2));
    return { success: true }
  }
}

module.exports = UserStorage;