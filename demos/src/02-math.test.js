const { sum, multiply, divide } = require('./02-math');

test("1 + 3 should be 4", () => {
  const rta = sum(1, 3);

  expect(rta).toBe(4);
});

test("9 x 2 should be 18", () => {
  const rta = multiply(9, 2);
  expect(rta).toBe(18);
});

test("12 / 3 should be 4", () => {
  const rta = divide(12, 3);
  expect(rta).toBe(4);

  const rta2 = divide(5, 2);
  expect(rta2).toBe(2.5);
});

test("should not divide by zero", () => {
  const rta = divide(0, 0);
  expect(rta).toBeNull();
});
