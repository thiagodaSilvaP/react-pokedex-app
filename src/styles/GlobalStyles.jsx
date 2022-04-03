import {createGlobalStyle, ThemeProvider} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        border: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        width: 100vw;
        height: 100vh;
    }
`

export const Theme = ({children}) => {
    const theme = {
        colors: {
            bg_light: '#fff',
            bg_default: '#eee',
            bg_default_dark: '#ddd'
        }
    }
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}