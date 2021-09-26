import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
    },
    buttons: {
      primary: {
        color: string,
        bg: string,
      }
    }
  }
}
