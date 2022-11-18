const http = require('http')
const express = require('express')
const { version } = require('./versionSetting')
const { mainPage } = require("./mainpage")
const { Chapter2} = require("./ERC2/chapter2")
const { erc2_1} = require("./ERC2/erc2_1")


const app = express()
app.use(express.json())

app.get('/', version) 
app.get('/mainpage', mainPage)
app.get('/erc2', Chapter2)
app.get('/erc2/2-1', erc2_1)

const server = http.createServer(app) 

server.listen(8000, () => {
  console.log('server is listening on PORT 8000, http://localhost:8000')
})