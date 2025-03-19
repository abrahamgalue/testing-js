const BooksService = require('./books.service');

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
      expect(books.length).toEqual(2);
    });
  });
});
