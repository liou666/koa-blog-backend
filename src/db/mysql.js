/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-03-27 12:09:46
 * @LastEditors: Liou
 * @LastEditTime: 2022-03-27 16:41:35
 */
const mysql = require('mysql2')

const { MYSQL_CONFIG } = require('../config/db')

const connection = mysql.createConnection(MYSQL_CONFIG)

const exec = (sql, params) =>
  new Promise((resolve, reject) => {
    connection.execute(sql, params, (err, results) => {
      if (err) {
        reject(err)
      } else {
        resolve(results)
      }
    })
  })

module.exports = exec
