const http = require('http')
const express = require('express')
const { expressTest } = require('./versionSetting')

const app = express()
app.use(express.json())

app.get('/', expressTest) 

const server = http.createServer(app) 

server.listen(8000, () => {
  console.log('server is listening on PORT 8000')
})