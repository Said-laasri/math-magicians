import calculate from './calculate';

describe('calculate', () => {
  it('should return an object', () => {
    const endRsult = calculate({ total: 0, next: null, operation: null }, 'AC');
    expect(endRsult).toEqual({ total: 0, next: null, operation: null });
  });
});
