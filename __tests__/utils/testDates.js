import {fullDateParsed} from '../../src/utils/formats';

describe('returns a date', () => {
  it('return a current Date formatted', () => {
    const result = fullDateParsed(new Date());
    expect(result).toBeTruthy();
  });

  it('return 2023-02-04T08:45:26.468Z as 04 de febrero, 2023', () => {
    const result = fullDateParsed('2023-02-04T08:45:26.468Z');
    expect(result).toEqual('4 de febrero, 2023');
  });

  it('return Sat Oct 31 17:00:00 PDT 2020 as 31 de octubre,2020', () => {
    const result = fullDateParsed('Sat Oct 31 17:00:00 PDT 2020');
    expect(result).toEqual('31 de octubre, 2020');
  });  

  it('should be No date', () => {
    const result = fullDateParsed(undefined);
    const result1 = fullDateParsed(null);
    const result2 = fullDateParsed(0);

    expect(result).toEqual('No date');
    expect(result1).toEqual('No date');
    expect(result2).toEqual('No date');
    
  });
});
