import express from 'express'
import { config } from './config.js'
import { getRandomQuote, quotes } from './quotes.js'
const app = express()

app.get('/api/quote', (req, res) => {
  res.send(getRandomQuote(quotes))
})

app.use('*', (req, res) => {
  res.status(404).send({
    url: req.originalUrl,
    error: 'sorry... Rafael is not here.'
  })
})

app.listen(config.port, () => {
  console.log(`listening at http://${config.host}:${config.port}/api`)
})
