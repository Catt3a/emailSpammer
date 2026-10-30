const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const fs = require('fs')

app.get('/', async (req,res) => {
  res.sendFile(__dirName, 'pages', 'main.html')
})

app.listen(PORT)
