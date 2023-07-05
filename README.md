[![API Tests](https://github.com/qualityshepherd/quote-api/actions/workflows/api.yaml/badge.svg)](https://github.com/qualityshepherd/quote-api/actions/workflows/api.yaml)

# Quote API

A simple--_if not silly_--api that spits out random quotes from [Being There](https://www.imdb.com/title/tt0078841/).

## Setup
1. run `npm i`
1. edit `config.js` (file is --assume-unchanged)

## Run Server
1. run `npm run watch` while in development
1. run `npm start` for "production" (runs [pm2](https://github.com/Unitech/pm2))

## Stop Server
1. run `npm stop`

## Run Tests
> tests use [node-fetch](https://github.com/node-fetch/node-fetch) and run via [tape](https://github.com/ljharb/tape)
1. start api: `npm start`
1. run tests: `npm test`
1. stop api: `npm stop`
