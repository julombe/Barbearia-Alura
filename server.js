
const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

//adding CSS
server.use(express.static('public'))


//configure template engine
server.set("view engine", "njk")
nunjucks.configure("views", {
    express: server
})

//adding route
server.get("/", function(req, res) {
    return res.render("index")
})

server.get("/contacto", function(req, res) {
    return res.render("contacto")
})

server.get("/produtos", function(req, res) {
    return res.render("produtos")
})



//start server
server.listen(3000, function() {
    console.log("server is running")
})