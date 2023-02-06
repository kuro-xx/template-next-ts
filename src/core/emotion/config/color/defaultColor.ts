import { Color, ColorVariant, Palette, Shadow } from '~/core/emotion/@types/theme';

const palette: Palette = {
  black: {
    code: '#444444',
    rgb: '68,68,68',
  },
  white: {
    code: '#FFFFFF',
    rgb: '255,255,255',
  },
  gray: {
    code: '#cccccc',
    rgb: '136,136,136',
  },
  lightGray: {
    code: '#DDDDDD',
    rgb: '204,204,204',
  },
  darkGray: {
    code: '#888888',
    rgb: '136,136,136',
  },
};

const colorVariant: ColorVariant = {
  primary: {
    main: {
      code: '#377E7F',
      rgb: '55,126,127',
    },
    light: {
      code: '#DDE9E6',
      rgb: '221,233,230',
    },
    dark: {
      code: '#175555',
      rgb: '23,85,85',
    },
  },
  secondary: {
    main: {
      code: '#E2915E',
      rgb: '226,145,94',
    },
    light: {
      code: '#ffc28c',
      rgb: '226,145,94',
    },
    dark: {
      code: '#D57539',
      rgb: '226,145,94',
    },
  },
};

const shadow: Shadow = {
  normal: '16px 16px 32px rgba(0,0,0,0.05)',
  none: '0 0 0 rgba(0,0,0,0.149)',
  up: '24px 24px 48px rgba(0,0,0,0.05)',
  down: '2px 2px 8px rgba(0,0,0,0.3)',
};

export const defaultColor: Color = {
  ...colorVariant,
  palette,
  text: palette.black,
  contrastText: palette.white,
  link: colorVariant.primary.main,
  background: palette.white,
  divider: palette.gray,
  shadow,
};
