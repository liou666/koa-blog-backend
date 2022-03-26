const http = require('http')
const app = require('../app')

const PORT = process.env.PORT || 3000

const server = http.createServer(app.callback())

server.listen(PORT)

// server.on('error', () => {})
