import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primaryBg: '#fff',
    dark: '#000',
    text: '#000',
  },
  fontSizes: [
    '.75rem', '1rem', '1.5rem', '1.75rem', '2rem', '2.5rem', '3rem', '4rem',
  ],
  space: [
    '.25rem', '.5rem', '.75rem', '1rem', '1.25rem', '1.5rem', '1.75rem', '2rem', '3rem', '4rem', '6rem', '8rem', '10rem', '12rem',
  ],
  lineHeights: {
    body: 1.3,
    heading: 1.5,
  },
  text: {
    big: {
      lineHeight: 'heading',
      fontSize: 3,
      marginBottom: 2,
    },
    normal: {
      lineHeight: 'body',
      fontSize: 1,
      marginBottom: 2,
    },
    small: {
      lineHeight: 'body',
      fontSize: 0,
      marginBottom: 1,
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
