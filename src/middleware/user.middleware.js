const userServer = require('../service/user.service')
const md5password = require('../utils/md5')
const {
  USERNAME_OR_PASSWORD_IS_REQUIRE,
  USERNAME_HAS_EXIT,
} = require('../constants/error-type')

class UserMiddleware {
  async verifyUser(ctx, next) {
    const { username, password } = ctx.request.body

    // 判断用户名或密码是否为空
    if (!username || !password) {
      const error = new Error(USERNAME_OR_PASSWORD_IS_REQUIRE)
      ctx.app.emit('error', error, ctx)
      return
    }

    // 用户名是否存在
    const result = await userServer.getUserByName(username)
    if (result) {
      const error = new Error(USERNAME_HAS_EXIT)
      ctx.app.emit('error', error, ctx)
      return
    }

    await next()
  }

  async handlePassword(ctx, next) {
    const { password } = ctx.request.body
    ctx.request.body.password = md5password(password)
    await next()
  }
}

module.exports = new UserMiddleware()
