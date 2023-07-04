# Quote API

A simple little quote api that spits out random quotes.

## Setup
1. run `npm i`
1. edit `config.js` as needed

## Run
1. run `npm run watch` while in development
1. run `npm start` for "production" (runs [pm2](https://github.com/Unitech/pm2))

## Stop
1. run `npm stop`

or _really_ stop:
1. get pid via: `ps aux | app.js`
1. `kill -9 {pid}`