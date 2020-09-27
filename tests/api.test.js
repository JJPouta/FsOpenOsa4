const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('blogAmount as JSON', async () => {
  const response = await api.get('/api/blogs').expect('Content-Type', /application\/json/)

  expect(response.body).toHaveLength(2)
})

afterAll(() => {
  mongoose.connection.close()
})

// 4.9
test('identification field as id', async () => {
  const response = await api.get('/api/blogs')
})
