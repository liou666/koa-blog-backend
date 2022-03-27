/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-03-27 17:09:22
 * @LastEditors: Liou
 * @LastEditTime: 2022-03-27 17:47:48
 */
const { ErrorModel } = require('../model/response.model')
const {
  USERNAME_OR_PASSWORD_IS_REQUIRE,
  USERNAME_HAS_EXIT,
} = require('../constants/error-type')

const errorHandler = async (err, ctx) => {
  console.log(err.message)
  let status
  let msg
  switch (err.message) {
    case USERNAME_OR_PASSWORD_IS_REQUIRE:
      status = 400
      msg = '用户名或密码不能为空'
      break
    case USERNAME_HAS_EXIT:
      status = 400
      msg = '用户名已存在'
      break
    default:
      status = 404
      msg = 'Not Fount'
  }
  ctx.status = status
  ctx.body = new ErrorModel(msg)
}

module.exports = errorHandler
