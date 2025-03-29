const createApp = require('../src/app')
const { generateManyBooks } = require('../src/fakes/book.fake')

const request = require('supertest')

const mockGetAll = jest.fn()

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: () => mockGetAll(),
  create: () => { },
})))

describe('Test for books', () => {
  let app;
  let server;
  beforeAll(() => {
    app = createApp()
    server = app.listen(3002)
  })

  afterAll(async () => {
    await server.close()
  })

  describe('test for [GET] /api/v1/books', () => {
    test('should return a list of books', async () => {
      // GIVEN
      const fakeBooks = generateManyBooks(4)
      mockGetAll.mockResolvedValue(fakeBooks)
      // WHEN
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          // THEN
          expect(body.length).toEqual(fakeBooks.length)
        })
    })
  })
})
