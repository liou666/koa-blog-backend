/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-03-27 01:07:51
 * @LastEditors: Liou
 * @LastEditTime: 2022-03-27 01:47:43
 */

const Koa = require('koa')
const json = require('koa-json')
const bodyparser = require('koa-bodyparser')

const app = new Koa()

const userRouter = require('./src/router/user.router')

// middleware
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  })
)
app.use(json())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// router
app.use(userRouter.routes(), userRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
