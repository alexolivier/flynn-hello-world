const express  = require('express')
const app = express()
app.get('/', (req,res)=> {
  res.end('ok')
})
app.listen(8080)