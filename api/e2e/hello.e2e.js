const request = require('supertest')

const createApp = require('../src/app')

describe('Test for hello endpoint', () => {
  let app;
  let server;
  beforeAll(() => {
    app = createApp()
    server = app.listen(3001)
  })

  afterAll(async () => {
    await server.close()
  })

  describe('test for [GET] /', () => {
    test('should return "Hello World!"', () => {
      return request(app)
        .get('/')
        .expect(200)
        .then(res => {
          expect(res.text).toEqual('Hello World!')
        })
    })
  })
})
