const { USERNAME_OR_PASSWORD_IS_REQUIRE } = require('../constants/error-type')

class UserMiddleware {
  verifyUser(ctx, next) {
    // 判断用户名或密码是否为空
    const { username, password } = ctx.request.body
    if (!username || !password) {
      const error = new Error(USERNAME_OR_PASSWORD_IS_REQUIRE)
      ctx.app.emit('error', error, ctx)
    }

    // 用户名是否存在
  }
}

module.exports = new UserMiddleware()
