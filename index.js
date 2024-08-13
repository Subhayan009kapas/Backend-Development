require('dotenv').config() // for port

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter' ,(req,res)=>{
  res.send("SubahaynKapas009")
})

app.get('/login' ,(req, res)=>{
          res.send("<h1>Please Login to my Site</h1>")
})

app.get('/youtube',(req,res)=>{
          res.send("<h2>Let' start with backend</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})