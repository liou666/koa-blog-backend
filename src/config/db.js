/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-03-27 11:57:55
 * @LastEditors: Liou
 * @LastEditTime: 2022-03-27 12:09:14
 */
require('dotenv').config()

const { MYSQL_HOST, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD } = process.env

const MYSQL_CONFIG = {
  host: MYSQL_HOST,
  user: MYSQL_USER,
  database: MYSQL_DATABASE,
  password: MYSQL_PASSWORD,
}

module.exports = {
  MYSQL_CONFIG,
}
