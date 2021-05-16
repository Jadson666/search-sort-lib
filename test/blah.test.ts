import { binarySearch } from '../src';

describe('blah', () => {
  it('works', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 2)).toEqual(1);
  });
  it('support object', () => {
    const arr = [{ age: 2 }, { age: 3 }, { age: 6 }];
    const index = binarySearch(arr, 2, ele => ele.age); // 0
    expect(index).toEqual(0);
  });
});
