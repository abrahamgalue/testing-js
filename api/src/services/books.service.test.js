const BooksService = require('./books.service');

const fakesBooks = [
  {
    id: 1,
    name: 'Harry Potter',
  },
];

const mockGetAll = jest.fn();

const MongoLibStub = {
  getAll: mockGetAll,
  create: () => { },
};

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
      mockGetAll.mockResolvedValue(fakesBooks);
      // WHEN
      const books = await service.getBooks({});
      // THEN
      expect(books.length).toEqual(1);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return a list book', async () => {
      // GIVEN
      mockGetAll.mockResolvedValue([{
        _id: 1,
        name: 'Harry Potter 2',
      }]);
      // WHEN
      const books = await service.getBooks({});
      // THEN
      expect(books[0].name).toEqual('Harry Potter 2');
    });
  });
});
