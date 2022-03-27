/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-03-27 11:48:16
 * @LastEditors: Liou
 * @LastEditTime: 2022-03-27 16:55:19
 */
const userService = require('../service/user.service')
const { SucceedModel, ErrorModel } = require('../model/response.model')

class UserController {
  // 注册
  async register(ctx, next) {
    const user = ctx.request.body
    try {
      await userService.register(user)
      ctx.body = new SucceedModel('注册成功')
    } catch (error) {
      ctx.body = new ErrorModel(error)
    }
  }
}

module.exports = new UserController()
