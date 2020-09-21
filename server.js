
const express = require('express')
const nunjucks = require('nunjucks')

const server = express()


//configure template engine
server.set("view engine", "html")
nunjucks.configure("views", {
    express: server
})

//adding route
server.get("/", function(req, res) {
    return res.render("index")
})



//start server
server.listen(3000, function() {
    console.log("server is running")
})