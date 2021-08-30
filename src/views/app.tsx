import { GlobalStyle } from 'style/global-style'
import { ThemeProvider } from 'theme/theme-provider'
import { Contents } from './contents'

export const App = () => {
  return (
    <ThemeProvider>
      <Contents />
      <GlobalStyle />
    </ThemeProvider>
  )
}
