const express  = require('express')
const app = express()
app.get('/', (req,res)=> {
  res.end('test')
})
app.listen(8080)