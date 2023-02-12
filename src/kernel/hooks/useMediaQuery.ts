import { useEffect, useState } from 'react';
import { MediaUtils, MediaType, CompareType } from '~/core/libs/utils/MediaUtils';

// ! MEMO: window.matchMedia は手動でのMockしかできないため、テストコードではなく storybook での表示確認とする
export const useMediaQuery = (mediaType: MediaType, compareType: CompareType) => {
  const [isMatch, setIsMatch] = useState(false);
  const query = getMediaQueryString(mediaType, compareType);

  useEffect(() => {
    if (!window) {
      setIsMatch(false);
      return;
    }

    if (!query) {
      setIsMatch(true);
      return;
    }

    const media = window.matchMedia(query);
    if (media.matches !== isMatch) {
      setIsMatch(media.matches);
    }
    const listener = () => setIsMatch(media.matches);
    media.addEventListener('change', listener, { passive: true });

    return () => {
      media.removeEventListener('change', listener);
    };
  }, [isMatch, query]);

  return isMatch;
};

const getMediaQueryString = (mediaType: MediaType, compareType: CompareType) => {
  if (compareType === 'le') {
    return MediaUtils.generateLeString(mediaType);
  }
  if (compareType === 'ge') {
    return MediaUtils.generateGeString(mediaType);
  }
  return MediaUtils.generateEqString(mediaType);
};
