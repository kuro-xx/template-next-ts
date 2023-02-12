import { ThemeProvider } from '@emotion/react';
import { theme } from '../src/core/emotion/theme';
import { GlobalStyles } from '../src/core/emotion/GlobalStyles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme.default}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
