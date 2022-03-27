/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-03-27 11:40:04
 * @LastEditors: Liou
 * @LastEditTime: 2022-03-27 17:45:33
 */
const exec = require('../db/mysql')

class UserServer {
  async register(user) {
    const { username, password, realname } = user
    const sql =
      'INSERT INTO users (username,password,realname) VALUES (?, ?, ?);'
    const row = await exec(sql, [username, password, realname])
    return row
  }

  async getUserByName(username) {
    const sql = `SELECT *  FROM users WHERE username = ?`
    const row = await exec(sql, [username])
    return row[0]
  }
}

module.exports = new UserServer()
