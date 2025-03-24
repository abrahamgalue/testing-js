const { faker } = require('@faker-js/faker');

const generateOneBook = () => ({
  _id: faker.database.mongodbObjectId(),
  name: faker.book.title(),
  price: faker.commerce.price(),
});

const generateManyBooks = (size = 10) => {
  const limit = size;
  const fakeBooks = [];
  for (let index = 0; index < limit; index++) {
    fakeBooks.push(generateOneBook());
  }
  return [...fakeBooks];
};

module.exports = { generateOneBook, generateManyBooks };
