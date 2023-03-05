import {addCommas} from '../../src/utils/formats';

describe('fotmat points', () => {
  it('return 50000 as 50,000 with commas', () => {
    const result = addCommas(1000);
    expect(result).toEqual('1,000');
  });

  it('return 100 with no commas', () => {
    const result = addCommas(100);
    expect(result).toEqual('100');
  });

  it('return 5000 as 5,000,000 with no commas', () => {
    const result = addCommas('5000000');
    expect(result).toEqual('5,000,000');
  });

  it('should return 0', () => {
    const result = addCommas(undefined);
    const result1 = addCommas(null);
    const result2 = addCommas(-1);
    const result4 = addCommas(0);

    expect(result).toEqual(0);
    expect(result1).toEqual(0);
    expect(result2).toEqual(0);
    expect(result4).toEqual(0);
  });
});
