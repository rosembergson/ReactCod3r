const porta = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors =  require('./cors')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(porta, function() {
    console.log(`backend os running on port ${porta}`)
})

module.exports = server