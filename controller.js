import { readFileSync } from 'node:fs'

function readData (path = './data.json') {
  return JSON.parse(readFileSync(path, 'utf8'))
}

export function getRandomQuote (numQuotes = 1) {
  const data = readData()
  let quotes = []

  for(let i = 0; i < numQuotes; i += 1) {
    quotes.push(data[Math.floor(Math.random() * data.length)])
  }
  return quotes
}

export function getQuoteById (id) {
  return readData().filter(obj => obj.id === id)
}