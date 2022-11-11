const http = require('http')
const express = require('express')
const { version } = require('./versionSetting')
const { mainPage } = require("./mainpage")
const { ERC2 } = require("./ERC2")


const app = express()
app.use(express.json())

app.get('/', version) 
app.get('/mainpage', mainPage)
app.get('/ERC2', ERC2)

const server = http.createServer(app) 

server.listen(8000, () => {
  console.log('server is listening on PORT 8000')
})