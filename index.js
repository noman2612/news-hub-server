const categoric = require('./data/categoric.json')
const express = require('express')
const app = express()
const port =process.env.PORT ||3000
const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello aldfhhoi erkasfhg8god!')
  })
app.get('/categoric', (req, res) => {
    res.send(categoric)
  })


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })