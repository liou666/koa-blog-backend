/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-03-27 11:40:04
 * @LastEditors: Liou
 * @LastEditTime: 2022-03-27 16:35:44
 */
const exec = require('../db/mysql')

class UserServer {
  async register(user) {
    const { username, password, realname } = user
    const sql =
      'INSERT INTO users (username,password,realname) VALUES (?, ?, ?);'
    const result = await exec(sql, [username, password, realname])
    return result
  }
}

module.exports = new UserServer()
