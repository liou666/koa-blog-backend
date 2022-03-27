/*
 * @Description:
 * @Autor: Liou
 * @Date: 2022-03-27 01:07:51
 * @LastEditors: Liou
 * @LastEditTime: 2022-03-27 13:15:05
 */

const Koa = require('koa')
const json = require('koa-json')
const bodyparser = require('koa-bodyparser')
const cors = require('koa2-cors')

const app = new Koa()

const userRouter = require('./src/router/user.router')

// middleware
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  ctx.set('Access-Control-Allow-Credentials', true)
  await next()
})

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
