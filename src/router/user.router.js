/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-03-27 01:27:49
 * @LastEditors: Liou
 * @LastEditTime: 2022-03-27 17:54:06
 */
const router = require('koa-router')({ prefix: '/v1/user' })
const { register } = require('../controller/user.controller')
const { verifyUser, handlePassword } = require('../middleware/user.middleware')

router.post('/login', async (ctx, next) => {
  //   const result = await login(req.query)
  //   if (result.length) {
  //     await set(req.sessionId, result[0])
  //     return new SucceedModel('登录成功')
  //   }
  //   return new ErrorModel('用户名或密码错误')
  // 验证用户名和密码是否为空
  // 查询账号密码是否匹配
  // 返回信息
})

router.post('/logout', async (ctx, next) => {
  ctx.body = 'users'
})

router.post('/register', verifyUser, handlePassword, register)

module.exports = router
