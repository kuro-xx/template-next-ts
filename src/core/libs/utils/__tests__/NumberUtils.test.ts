import 'jest';
import { NumberUtils } from '../NumberUtils';

describe('NumberUtils', () => {
  describe('isEven', () => {
    describe('Integer Value: 2, 4, 10', () => {
      it('return true', () => {
        expect(NumberUtils.isEven(2)).toBe(true);
        expect(NumberUtils.isEven(4)).toBe(true);
        expect(NumberUtils.isEven(10)).toBe(true);
      });
    });

    describe('Integer Value: 1, 3, 11', () => {
      it('return false', () => {
        expect(NumberUtils.isEven(1)).toBe(false);
        expect(NumberUtils.isEven(3)).toBe(false);
        expect(NumberUtils.isEven(11)).toBe(false);
      });
    });

    describe('Integer Value: 0', () => {
      it('return true', () => {
        expect(NumberUtils.isEven(0)).toBe(true);
      });
    });
  });
});
