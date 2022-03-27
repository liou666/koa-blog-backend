/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-03-27 17:55:55
 * @LastEditors: Liou
 * @LastEditTime: 2022-03-27 18:07:18
 */
require('dotenv').config()

const crypto = require('crypto')

const { MD5_SECRET_KEY } = process.env

const md5password = (password) => {
  const str = `password=${password}&key=${MD5_SECRET_KEY}`
  const md5 = crypto.createHash('md5')
  const result = md5.update(str).digest('hex')
  return result
}

module.exports = md5password
