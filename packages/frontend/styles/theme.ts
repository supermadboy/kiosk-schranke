import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primaryBg: '#eee',
    dark: '#000',
    text: '#000',
  },
  fontSizes: [
    '.75rem', '1rem', '1.5rem', '1.75rem', '2rem', '2.5rem', '3rem', '4rem',
  ],
  space: [
    '.25rem', '.5rem', '.75rem', '1rem', '1.25rem', '1.5rem', '1.75rem', '2rem', '3rem', '4rem',
  ],
  lineHeights: {
    body: 1,
    heading: 1.3,
  },
  text: {
    normal: {
      lineHeight: 'body',
      fontSize: 1,
    },
    small: {
      lineHeight: 'body',
      fontSize: 0,
    },
  },
  variants: {
    bigLink: {
      fontSize: 2,
      textDecorationLine: 'underline',
      fontWeight: 'bold',
    },
  },
};

export default theme;
