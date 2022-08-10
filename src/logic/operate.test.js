import operate from './operate';

test('should return a number', () => {
  expect(operate(2, 3, '+')).toBe('5');
  expect(operate(3, 3, '-')).toBe('0');
  expect(operate(2, 3, 'x')).toBe('6');
  expect(operate(4, 2, '÷')).toBe('2');
  expect(operate(8, 4, '%')).toBe('0');
});
