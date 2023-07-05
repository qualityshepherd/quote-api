import test from 'tape'
import fetch from 'node-fetch'

const baseUrl = process.env.BASEURL || 'http://localhost:4242'

test('random quote', async t => {
  const res = await fetch(`${baseUrl}/api`)
  const data = await res.json()

  t.ok(await res.status === 200, 'returns 200')
  t.ok(await data, 'returns data')
})

test('quote id', async t => {
  const res = await fetch(`${baseUrl}/api/00001`)
  const data = await res.json()

  t.ok(await res.status === 200, 'returns 200')
  t.equal(await data.id, '00001', 'returns expected id')
  t.equal(await data.quote, 'I see.', 'returns expected quote')
})

test('invalid quote id', async t => {
  const res = await fetch(`${baseUrl}/api/420`)

  t.ok(await res.status === 404, 'returns 404')
})

test('invalid url', async t => {
  const res = await fetch(`${baseUrl}/api/bullshit`)

  t.ok(res.status === 404, 'returns 404')
})
