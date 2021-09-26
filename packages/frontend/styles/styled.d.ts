import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string,
      primaryBg: string,
      dark: string,
    },
    fontSizes: string[],
    space: string[],
    lineHeights: {
      body: number,
      heading: number,
    },
    text: {
      normal: {
        lineHeight: string,
        fontSize: number,
      }
      small: {
        lineHeight: string,
        fontSize: number,
      }
    }
    variants: {
      bigLink: {
        fontSize: number,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
      },
    }
  }
}
