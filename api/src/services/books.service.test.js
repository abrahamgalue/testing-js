const BooksService = require('./books.service');

const fakesBooks = [
  {
    id: 1,
    name: 'Harry Potter',
  },
];

const MongoLibStub = {
  getAll: () => [...fakesBooks],
  create: () => { },
};

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
  });

  describe('test for getBooks', () => {
    test('should return a list book', async () => {
      // GIVEN
      // WHEN
      const books = await service.getBooks({});
      // THEN
      expect(books.length).toEqual(1);
    });

    test('should return a list book', async () => {
      // GIVEN
      // WHEN
      const books = await service.getBooks({});
      // THEN
      expect(books[0].name).toEqual('Harry Potter');
    });
  });
});
