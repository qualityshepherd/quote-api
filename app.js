import express from 'express'
import { readFileSync } from 'node:fs'
import { config } from './config.js'
const app = express()

app.get('/api/', (req, res) => {
  res.send(getRandomQuote())
})

app.get('/api/:id', (req, res) => {
  const data = getQuoteById(req.params.id)
  data ? res.send(data) : res.status(404).send({
    error: `${req.params.id} not found`
  })
})

app.use((err, req, res, next) => {
  console.log("woops...", err)
  next()
})

function readData (path = './data.json') {
  return JSON.parse(readFileSync(path, 'utf8'))
}

function getRandomQuote () {
  const data = readData()
  return data[Math.floor(Math.random() * data.length)]
}

function getQuoteById (id) {
  return readData().filter(obj => obj.id === id)[0]
}

app.listen(config.port, () => {
  console.log(`I like to listen @ http://${config.host}:${config.port}/api`)
})
