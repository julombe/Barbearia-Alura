
const express = require('express')
const nunjucks = require('nunjucks')

const server = express()


//start server
server.listen(3000, function() {
    console.log("server is running")
})