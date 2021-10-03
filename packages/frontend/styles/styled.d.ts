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
      big: {
        lineHeight: string,
        fontSize: number,
        marginBottom: number,
      }
      normal: {
        lineHeight: string,
        fontSize: number,
        marginBottom: number,
      }
      small: {
        lineHeight: string,
        fontSize: number,
        marginBottom: number,
      }
    },
    variants: {
      bigLink: {
        fontSize: number,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
      },
    }
  }
}
