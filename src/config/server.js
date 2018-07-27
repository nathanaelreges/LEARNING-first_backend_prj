const port = 8080

const bodyParser = require('body-parser')
const express = require('express')

const server = express()


server.use(bodyParser.urlencoded( {extended: true} ))
server.use(bodyParser.json())


server.listen(port, () => {
   console.log('BACKEND listening at port ' + port)
})


