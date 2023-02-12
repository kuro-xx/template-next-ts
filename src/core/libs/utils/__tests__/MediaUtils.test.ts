import 'jest';
import { MediaUtils } from '../MediaUtils';

describe('MediaUtils', () => {
  describe('mq', () => {
    it('mediaType: desktop, compareType: eq', () => {
      const result = MediaUtils.mq('desktop', 'eq');
      expect(result).toBe('@media (min-width: 1681px)');
    });
    it('mediaType: laptop, compareType: eq', () => {
      const result = MediaUtils.mq('laptop', 'eq');
      expect(result).toBe('@media (min-width: 961px) and (max-width: 1680px)');
    });
    it('mediaType: tablet, compareType: eq', () => {
      const result = MediaUtils.mq('tablet', 'eq');
      expect(result).toBe('@media (min-width: 561px) and (max-width: 960px)');
    });
    it('mediaType: mobile, compareType: eq', () => {
      const result = MediaUtils.mq('mobile', 'eq');
      expect(result).toBe('@media (max-width: 560px)');
    });

    it('mediaType: desktop, compareType: le', () => {
      const result = MediaUtils.mq('desktop', 'le');
      expect(result).toBe(undefined);
    });
    it('mediaType: laptop, compareType: le', () => {
      const result = MediaUtils.mq('laptop', 'le');
      expect(result).toBe('@media (max-width: 1680px)');
    });
    it('mediaType: tablet, compareType: le', () => {
      const result = MediaUtils.mq('tablet', 'le');
      expect(result).toBe('@media (max-width: 960px)');
    });
    it('mediaType: mobile, compareType: le', () => {
      const result = MediaUtils.mq('mobile', 'le');
      expect(result).toBe('@media (max-width: 560px)');
    });

    it('mediaType: desktop, compareType: ge', () => {
      const result = MediaUtils.mq('desktop', 'ge');
      expect(result).toBe('@media (min-width: 1681px)');
    });
    it('mediaType: laptop, compareType: ge', () => {
      const result = MediaUtils.mq('laptop', 'ge');
      expect(result).toBe('@media (min-width: 961px)');
    });
    it('mediaType: tablet, compareType: ge', () => {
      const result = MediaUtils.mq('tablet', 'ge');
      expect(result).toBe('@media (min-width: 561px)');
    });
    it('mediaType: mobile, compareType: ge', () => {
      const result = MediaUtils.mq('mobile', 'ge');
      expect(result).toBe(undefined);
    });
  });

  describe('generateEqString', () => {
    it('mediaType: desktop', () => {
      const result = MediaUtils.generateEqString('desktop');
      expect(result).toBe('(min-width: 1681px)');
    });
    it('mediaType: laptop', () => {
      const result = MediaUtils.generateEqString('laptop');
      expect(result).toBe('(min-width: 961px) and (max-width: 1680px)');
    });
    it('mediaType: tablet', () => {
      const result = MediaUtils.generateEqString('tablet');
      expect(result).toBe('(min-width: 561px) and (max-width: 960px)');
    });
    it('mediaType: mobile', () => {
      const result = MediaUtils.generateEqString('mobile');
      expect(result).toBe('(max-width: 560px)');
    });
  });

  describe('generateLeString', () => {
    it('mediaType: desktop', () => {
      const result = MediaUtils.generateLeString('desktop');
      expect(result).toBe(undefined);
    });
    it('mediaType: laptop', () => {
      const result = MediaUtils.generateLeString('laptop');
      expect(result).toBe('(max-width: 1680px)');
    });
    it('mediaType: tablet', () => {
      const result = MediaUtils.generateLeString('tablet');
      expect(result).toBe('(max-width: 960px)');
    });
    it('mediaType: mobile', () => {
      const result = MediaUtils.generateLeString('mobile');
      expect(result).toBe('(max-width: 560px)');
    });
  });

  describe('generateGeString', () => {
    it('mediaType: desktop', () => {
      const result = MediaUtils.generateGeString('desktop');
      expect(result).toBe('(min-width: 1681px)');
    });
    it('mediaType: laptop', () => {
      const result = MediaUtils.generateGeString('laptop');
      expect(result).toBe('(min-width: 961px)');
    });
    it('mediaType: tablet', () => {
      const result = MediaUtils.generateGeString('tablet');
      expect(result).toBe('(min-width: 561px)');
    });
    it('mediaType: mobile', () => {
      const result = MediaUtils.generateGeString('mobile');
      expect(result).toBe(undefined);
    });
  });
});
