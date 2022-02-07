import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string,
      primaryBg: string,
      secondaryBg: string,
      dark: string,
      secondaryColor: string,
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
    buttons: {
      primary: {
        bg: string,
        color: string,
        border: string,
        borderRadius: string,
      }
    }
    variants: {
      bigLink: {
        fontSize: number,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
      }
    }
  }
}
