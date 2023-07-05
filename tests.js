import test from 'tape'
import fetch from 'node-fetch'

const baseUrl = process.env.BASEURL || 'http://localhost:4242'

test('random quote', async t => {
  const res = await fetch(`${baseUrl}/api`)
  const data = await res.json()

  t.ok(await res.status === 200, 'should return 200')
  t.ok(await data, 'should return data')
})

test('quote by id', async t => {
  const res = await fetch(`${baseUrl}/api/00001`)
  const data = await res.json()

  t.ok(await res.status === 200, 'should return 200')
  t.equal(await data.id, '00001', 'should return expected id')
  t.equal(await data.quote, 'I see.', 'should return expected quote')
})

test('invalid url', async t => {
  const res = await fetch(`${baseUrl}/api/bullshit`)

  t.ok(res.status === 404, 'should 404')
})
