import { breakpoint } from './config/breakpoint';
import { defaultColor } from './config/color/defaultColor';
import { font } from './config/font';
import { radius } from './config/radius';
import { transition } from './config/transition';
import { zIndex } from './config/zIndex';
import { aspectRatio } from './config/aspectRatio';

export const theme = {
  default: {
    color: defaultColor,
    font,
    aspectRatio,
    breakpoint,
    radius,
    transition,
    zIndex,
  },
};
