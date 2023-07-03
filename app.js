import express from 'express'
import { getRandomQuote, quotes } from './quotes.js'
const app = express()

const config = {
  host: 'localhost',
  port: 4242
}

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
