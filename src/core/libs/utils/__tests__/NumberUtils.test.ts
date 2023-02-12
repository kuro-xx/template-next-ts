import 'jest';
import { NumberUtils } from '../NumberUtils';

describe('NumberUtils', () => {
  describe('isEven', () => {
    it('Integer Value: 2, 4, 10 -> true', () => {
      expect(NumberUtils.isEven(2)).toBe(true);
      expect(NumberUtils.isEven(4)).toBe(true);
      expect(NumberUtils.isEven(10)).toBe(true);
    });
    it('Integer Value: 1, 3, 11', () => {
      expect(NumberUtils.isEven(1)).toBe(false);
      expect(NumberUtils.isEven(3)).toBe(false);
      expect(NumberUtils.isEven(11)).toBe(false);
    });
    it('Integer Value: 0', () => {
      expect(NumberUtils.isEven(0)).toBe(true);
    });
  });
});
