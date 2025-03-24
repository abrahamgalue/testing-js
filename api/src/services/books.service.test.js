const { generateManyBooks } = require('../fakes/book.fake');
const BooksService = require('./books.service');

const mockGetAll = jest.fn();

// const MongoLibStub = {
//   getAll: mockGetAll,
//   create: () => { },
// };

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => { },
})));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('should return a list book', async () => {
      // GIVEN
      const fakesBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakesBooks);
      // WHEN
      const books = await service.getBooks({});
      // THEN
      expect(books.length).toEqual(fakesBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return a list book', async () => {
      // GIVEN
      const fakesBooks = generateManyBooks(4);
      mockGetAll.mockResolvedValue(fakesBooks);
      // WHEN
      const books = await service.getBooks({});
      // THEN
      expect(books[0].name).toEqual(fakesBooks[0].name);
    });
  });
});
