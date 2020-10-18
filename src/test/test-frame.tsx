import * as React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { defaultTheme, darkTheme } from '../theme/theme'
import { Router } from 'react-router-dom'
import { createMemoryHistory, MemoryHistory } from 'history'
import { AppState } from '../store/root-reducer'
import { GlobalStyle } from '../style/global-style.sc'

const initialState = {} as AppState
const mockStore = configureStore([reduxThunk])

interface TestFrameProps {
  theme?: DefaultTheme
  history?: MemoryHistory
  state?: AppState
  children: React.ReactNode
}
export const TestFrame = (props: TestFrameProps) => {
  const store = mockStore(props?.state ?? initialState)
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={props?.theme ?? defaultTheme}>
        <Router history={props?.history ?? createMemoryHistory()}>
          <>{props.children}</>
        </Router>
        <GlobalStyle />
      </ThemeProvider>
    </StoreProvider>
  )
}
