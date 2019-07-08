import * as NumberUtils from '../../src/utils/numberUtils';

describe('Number Utils tests', () => {
  it('sum should add two numbers', () => {
    expect(NumberUtils.sum(1, 2)).toEqual(3);
  });
});
