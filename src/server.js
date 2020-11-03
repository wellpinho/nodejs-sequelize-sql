const express = require('express')
const app = express()

require('./database')

app.use(express.json())

const routes = require('./routes/routes')

app.use(routes)

const PORT = 4000
app.listen(PORT, () => {
  console.log(`Running on: http://localhost:${PORT}`)
})