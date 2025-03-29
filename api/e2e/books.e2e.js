const request = require('supertest')
const { MongoClient } = require('mongodb')

const createApp = require('../src/app')
const { config } = require('../src/config')

const DB_NAME = config.dbName
const MONGO_URI = config.dbUrl

describe('Test for books', () => {
  let app;
  let server;
  let database;

  beforeAll(async () => {
    app = createApp()
    server = app.listen(3002)
    const client = new MongoClient(MONGO_URI)
    await client.connect()
    database = client.db(DB_NAME)
  })

  afterAll(async () => {
    await server.close()
    await database.dropDatabase()
  })

  describe('test for [GET] /api/v1/books', () => {
    test('should return a list of books', async () => {
      // GIVEN
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book 1',
          year: 1998,
          author: 'nicolas'
        },
        {
          name: 'Book 2',
          year: 2003,
          author: 'pedro'
        },
      ])
      // WHEN
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          // THEN
          expect(body.length).toEqual(seedData.insertedCount)
        })
    })
  })
})
