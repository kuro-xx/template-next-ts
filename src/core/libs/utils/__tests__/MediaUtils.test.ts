import 'jest';
import { MediaUtils } from '../MediaUtils';

describe('MediaUtils', () => {
  describe('mq', () => {
    describe('args(mediaType: desktop, compareType: eq)', () => {
      it('return @media (min-width: 1681px)', () => {
        const result = MediaUtils.mq('desktop', 'eq');
        expect(result).toBe('@media (min-width: 1681px)');
      });
    });
    describe('args(mediaType: laptop, compareType: eq)', () => {
      it('return @media (min-width: 961px) and (max-width: 1680px)', () => {
        const result = MediaUtils.mq('laptop', 'eq');
        expect(result).toBe('@media (min-width: 961px) and (max-width: 1680px)');
      });
    });
    describe('args(mediaType: tablet, compareType: eq)', () => {
      it('return @media (min-width: 561px) and (max-width: 960px)', () => {
        const result = MediaUtils.mq('tablet', 'eq');
        expect(result).toBe('@media (min-width: 561px) and (max-width: 960px)');
      });
    });
    describe('args(mediaType: mobile, compareType: eq)', () => {
      it('return @media (max-width: 560px)', () => {
        const result = MediaUtils.mq('mobile', 'eq');
        expect(result).toBe('@media (max-width: 560px)');
      });
    });

    describe('args(mediaType: desktop, compareType: le)', () => {
      it('return undefined', () => {
        const result = MediaUtils.mq('desktop', 'le');
        expect(result).toBe(undefined);
      });
    });
    describe('args(mediaType: laptop, compareType: le)', () => {
      it('return @media (max-width: 1680px)', () => {
        const result = MediaUtils.mq('laptop', 'le');
        expect(result).toBe('@media (max-width: 1680px)');
      });
    });
    describe('args(mediaType: tablet, compareType: le)', () => {
      it('return @media (max-width: 960px)', () => {
        const result = MediaUtils.mq('tablet', 'le');
        expect(result).toBe('@media (max-width: 960px)');
      });
    });
    describe('args(mediaType: mobile, compareType: le)', () => {
      it('return @media (max-width: 560px)', () => {
        const result = MediaUtils.mq('mobile', 'le');
        expect(result).toBe('@media (max-width: 560px)');
      });
    });

    describe('args(mediaType: desktop, compareType: ge)', () => {
      it('return @media (min-width: 1681px)', () => {
        const result = MediaUtils.mq('desktop', 'ge');
        expect(result).toBe('@media (min-width: 1681px)');
      });
    });
    describe('args(mediaType: laptop, compareType: ge)', () => {
      it('return @media (min-width: 961px)', () => {
        const result = MediaUtils.mq('laptop', 'ge');
        expect(result).toBe('@media (min-width: 961px)');
      });
    });
    describe('args(mediaType: tablet, compareType: ge)', () => {
      it('return @media (min-width: 561px)', () => {
        const result = MediaUtils.mq('tablet', 'ge');
        expect(result).toBe('@media (min-width: 561px)');
      });
    });
    describe('args(mediaType: mobile, compareType: ge)', () => {
      it('return undefined', () => {
        const result = MediaUtils.mq('mobile', 'ge');
        expect(result).toBe(undefined);
      });
    });
  });

  describe('generateEqString', () => {
    describe('args(mediaType: desktop)', () => {
      it('return (min-width: 1681px)', () => {
        const result = MediaUtils.generateEqString('desktop');
        expect(result).toBe('(min-width: 1681px)');
      });
    });
    describe('args(mediaType: laptop)', () => {
      it('return (min-width: 961px) and (max-width: 1680px)', () => {
        const result = MediaUtils.generateEqString('laptop');
        expect(result).toBe('(min-width: 961px) and (max-width: 1680px)');
      });
    });
    describe('args(mediaType: tablet)', () => {
      it('return (min-width: 561px) and (max-width: 960px)', () => {
        const result = MediaUtils.generateEqString('tablet');
        expect(result).toBe('(min-width: 561px) and (max-width: 960px)');
      });
    });
    describe('args(mediaType: mobile)', () => {
      it('return (max-width: 560px)', () => {
        const result = MediaUtils.generateEqString('mobile');
        expect(result).toBe('(max-width: 560px)');
      });
    });
  });

  describe('generateLeString', () => {
    describe('args(mediaType: desktop)', () => {
      it('return undefined', () => {
        const result = MediaUtils.generateLeString('desktop');
        expect(result).toBe(undefined);
      });
    });
    describe('args(mediaType: laptop)', () => {
      it('return (max-width: 1680px)', () => {
        const result = MediaUtils.generateLeString('laptop');
        expect(result).toBe('(max-width: 1680px)');
      });
    });
    describe('args(mediaType: tablet)', () => {
      it('return (max-width: 960px)', () => {
        const result = MediaUtils.generateLeString('tablet');
        expect(result).toBe('(max-width: 960px)');
      });
    });
    describe('args(mediaType: mobile)', () => {
      it('return (max-width: 560px)', () => {
        const result = MediaUtils.generateLeString('mobile');
        expect(result).toBe('(max-width: 560px)');
      });
    });
  });

  describe('generateGeString', () => {
    describe('args(mediaType: desktop)', () => {
      it('return (min-width: 1681px)', () => {
        const result = MediaUtils.generateGeString('desktop');
        expect(result).toBe('(min-width: 1681px)');
      });
    });
    describe('args(mediaType: laptop)', () => {
      it('return (min-width: 961px)', () => {
        const result = MediaUtils.generateGeString('laptop');
        expect(result).toBe('(min-width: 961px)');
      });
    });
    describe('args(mediaType: tablet)', () => {
      it('return (min-width: 561px)', () => {
        const result = MediaUtils.generateGeString('tablet');
        expect(result).toBe('(min-width: 561px)');
      });
    });
    describe('args(mediaType: mobile)', () => {
      it('return undefined', () => {
        const result = MediaUtils.generateGeString('mobile');
        expect(result).toBe(undefined);
      });
    });
  });
});
