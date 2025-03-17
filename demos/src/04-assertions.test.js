// matchers / asserts

test('test obj', () => {
  const data = { name: 'Rigo' };
  data.lastname = 'Molina';
  expect(data).toEqual({ name: 'Rigo', lastname: 'Molina' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
  expect(1).toBeTruthy();
});

test('string', () => {
  expect('Christoph').toMatch(/stop/);
});

test('list / arrays', () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(3);

  expect(numbers).toEqual([1, 2, 3, 4])
});
