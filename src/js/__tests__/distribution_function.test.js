import userLife from '../distribution_function';

test('userLife check_1', () => {
  const someUser1 = userLife({ name: 'Маг', health: 30 });
  expect(someUser1).toBe('wounded');
});

test('userLife check_2', () => {
  const someUser = userLife({ name: 'Маг', health: 10 });
  expect(someUser).toBe('critical');
});

test('userLife check_3', () => {
  const someUser = userLife({ name: 'Маг', health: 90 });
  expect(someUser).toBe('healthy');
});
