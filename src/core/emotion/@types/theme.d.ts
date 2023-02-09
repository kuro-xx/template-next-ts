import '@emotion/react';

declare module '@emotion/react' {
  interface Theme {
    color: Color;
    font: Font;
    aspectRatio: AspectRatio;
    breakpoint: Breakpoint;
    radius: Radius;
    transition: Transition;
    zIndex: ZIndex;
  }
}

type ColorValue = {
  code: `#${string}`;
  rgb: `${number},${number},${number}`;
};
type ColorVariantOptions = {
  main: ColorValue;
  light: ColorValue;
  dark: ColorValue;
};
type ColorVariant = {
  primary: ThemeColorVariant;
  secondary: ThemeColorVariant;
};
type Palette = {
  white: ColorValue;
  black: ColorValue;
  gray: ColorValue;
  lightGray: ColorValue;
  darkGray: ColorValue;
};
type Shadow = {
  normal: string;
  none: string;
  up: string;
  down: string;
};
type Color = ColorVariant & {
  palette: Palette;
  text: ColorValue;
  contrastText: ColorValue;
  link: ColorValue;
  background: ColorValue;
  divider: ColorValue;
  shadow: Shadow;
  feature: {
    home: {
      sectionHeader: ColorValue;
    };
  };
};

type RemValue = `${number}rem`;
type Font = {
  size: {
    h1: RemValue;
    h2: RemValue;
    h3: RemValue;
    h4: RemValue;
    h5: RemValue;
    h6: RemValue;
  };
  family: {
    gothic: string;
  };
  lineHeight: {
    normal: number;
    heading: number;
  };
};

type RatioValue = `${number}/${number}`;
type AspectRatio = {
  normal: '204/137';
};

type Breakpoint = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

type ZIndex = {
  loading: number;
  header: number;
  modal: number;
  popper: number;
  agreement: number;
};

type Radius = {
  normal: number;
};

type Transition = {
  ease: string;
};
