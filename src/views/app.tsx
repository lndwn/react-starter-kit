import { GlobalStyle } from 'style/global-style'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'theme'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      Hello World
      <GlobalStyle />
    </ThemeProvider>
  )
}
