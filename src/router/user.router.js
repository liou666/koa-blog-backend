/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-03-27 01:27:49
 * @LastEditors: Liou
 * @LastEditTime: 2022-03-27 01:32:08
 */
const router = require('koa-router')()

router.prefix('/users')
router.get('/', async (ctx, next) => {
  ctx.body = 'users'
})

module.exports = router
