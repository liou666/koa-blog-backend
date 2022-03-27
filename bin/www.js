const http = require('http')
const app = require('../app')

const PORT = process.env.HOST_PORT || 3001

const server = http.createServer(app.callback())

server.listen(PORT, () => {
  console.log(`server is running ${PORT}`)
})

// server.on('error', () => {})
