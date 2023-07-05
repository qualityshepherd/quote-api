import express from 'express'
import { config } from './config.js'
import { getQuoteById, getRandomQuote } from './controller.js'
const app = express()

app.get('/api/rand/', (req, res) => {
  res.send(getRandomQuote())
})

app.get('/api/rand/:num', (req, res) => {
  res.send(getRandomQuote(req.params.num))
})

app.get('/api/quote/:id', (req, res) => {
  const data = getQuoteById(req.params.id)
  data.length // array not empty
    ? res.send(data)
    : res.status(404).send({
      error: `Raphael could not find id ${req.params.id}`
    })
})

app.use('*', (req, res) => {
  res.status(404).send({
    url: req.originalUrl,
    error: 'Did that chickenshit asshole Raphael send you?'
  })
})

app.listen(config.port, () => {
  console.log(`I like to listen @ http://${config.host}:${config.port}/api`)
})
