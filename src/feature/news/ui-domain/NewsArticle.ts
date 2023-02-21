import { StaticImageData } from 'next/image';

export type NewsArticle = {
  id: string;
  headline: string;
  description: string;
  image: string | StaticImageData;
};
