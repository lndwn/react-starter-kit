import * as React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { defaultTheme, darkTheme } from 'theme'
import { useSystemColorScheme, useDocumentTitle, usePointerInfo } from 'utils'
import { GlobalStyle } from 'style/global-style.sc'
import { Grid } from 'components'
import { Controls } from './fragments/controls'
import { Sidebar } from 'components/sidebar'
import { ThemeSwitcher } from './fragments/theme-switcher'
import { Dropdown } from './fragments/dropdown'
import { AppState } from 'store/root-reducer'

const mapState = (state: AppState) => ({
  colorScheme: state.colorScheme.overrideScheme,
})
const connector = connect(mapState)
type RootProps = ConnectedProps<typeof connector>

const Root = (props: RootProps) => {
  useDocumentTitle('Root — RSK')
  usePointerInfo()

  const systemScheme = useSystemColorScheme()
  console.group('Color Scheme')
  console.info('User color scheme', props.colorScheme)
  console.info('System color scheme', systemScheme)
  const theme =
    props.colorScheme === 'dark'
      ? darkTheme
      : props.colorScheme === 'light'
      ? defaultTheme
      : systemScheme === 'dark'
      ? darkTheme
      : defaultTheme
  console.info(theme)
  console.groupEnd()

  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
      <Grid
        gridTemplateColumns="repeat(auto-fill, minmax(320px, 1fr))"
        p="5"
        gridGap="5"
        alignItems="start"
        justifyItems="stretch">
        <ThemeSwitcher />
        <Controls />
        <Dropdown />
      </Grid>
      <GlobalStyle />
    </ThemeProvider>
  )
}

const ConnectedRoot = connector(Root)
export { ConnectedRoot as Root }
