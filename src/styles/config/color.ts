type ColorName = string;

type Color = {
  CODE: `#${string}`;
  RGB: `${number},${number},${number}`;
};

export const COLOR: Record<ColorName, Color> = {
  LINK: {
    CODE: '#0070f3',
    RGB: '0,112,243',
  },
} as const;
