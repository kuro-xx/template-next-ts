type Breakpoint = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export type MediaType = 'desktop' | 'laptop' | 'tablet' | 'mobile';
export type CompareType = 'eq' | 'le' | 'ge';

export const breakpoint: Breakpoint = {
  xs: 320,
  sm: 560,
  md: 960,
  lg: 1680,
  xl: 1920,
};

const mediaBreakpoint: Record<MediaType, { min: number | null; max: number | null }> = {
  desktop: {
    min: breakpoint.lg + 1,
    max: null,
  },
  laptop: {
    min: breakpoint.md + 1,
    max: breakpoint.lg,
  },
  tablet: {
    min: breakpoint.sm + 1,
    max: breakpoint.md,
  },
  mobile: {
    min: null,
    max: breakpoint.sm,
  },
};

export class MediaUtils {
  static mq(mediaType: MediaType, compareType: CompareType): string | undefined {
    const mediaQueryString = getMediaQueryString(mediaType, compareType);
    return mediaQueryString ? `@media ${mediaQueryString}` : undefined;
  }

  /**
   * 指定デバイスと完全に一致する場合のみ
   */
  static generateEqString(type: MediaType): string | undefined {
    const min = mediaBreakpoint[type].min;
    const max = mediaBreakpoint[type].max;

    if (min === null && max === null) {
      return undefined;
    }
    if (min === null) {
      return `(max-width: ${max}px)`;
    }
    if (max === null) {
      return `(min-width: ${min}px)`;
    }
    return `(min-width: ${min}px) and (max-width: ${max}px)`;
  }

  /**
   * 指定デバイスと以下の幅の場合のみ
   */
  static generateLeString(type: MediaType): string | undefined {
    const max = mediaBreakpoint[type].max;

    if (max === null) {
      return undefined;
    }
    return `(max-width: ${max}px)`;
  }

  /**
   * 指定デバイスと以上の幅の場合のみ
   */
  static generateGeString(type: MediaType): string | undefined {
    const min = mediaBreakpoint[type].min;

    if (min === null) {
      return undefined;
    }
    return `(min-width: ${min}px)`;
  }
}

const getMediaQueryString = (mediaType: MediaType, compareType: CompareType): string | undefined => {
  if (compareType === 'le') {
    return MediaUtils.generateLeString(mediaType);
  }
  if (compareType === 'ge') {
    return MediaUtils.generateGeString(mediaType);
  }
  return MediaUtils.generateEqString(mediaType);
};
