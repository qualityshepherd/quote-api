import test from 'tape'
import fetch from 'node-fetch'

const baseUrl = process.env.BASEURL || 'http://localhost:4242'

test('random quote', async t => {
  const res = await fetch(`${baseUrl}/api/rand`)
  const data = await res.json()

  t.ok(await res.status === 200, 'returns 200')
  t.ok(await data[0].quote, 'returns data')
})

test('multiple quotes', async t => {
  let count = 0
  const res = await fetch(`${baseUrl}/api/rand/5`)
  const data = await res.json()
  await data.filter(obj => count += 1)

  t.ok(await res.status === 200, 'returns 200')
  t.equals(count, 5, 'returns n quotes')
})

test('quote id', async t => {
  const res = await fetch(`${baseUrl}/api/quote/00001`)
  const data = await res.json()

  t.ok(await res.status === 200, 'returns 200')
  t.equals(await data[0].id, '00001', 'returns expected id')
  t.equals(await data[0].quote, 'I see.', 'returns expected quote')
})

test('invalid quote id', async t => {
  const res = await fetch(`${baseUrl}/api/quote/420`)

  t.equals(await res.status, 404, 'returns 404')
})

test('invalid url', async t => {
  const res = await fetch(`${baseUrl}/api/rafael`)

  t.equals(res.status, 404, 'returns 404')
})
