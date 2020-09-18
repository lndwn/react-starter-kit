import * as React from 'react'
import { Box, Centered, Flex, Icon } from './components'

export const App = () => {
  return (
    <Centered width="100vw" height="100vh">
      <Flex alignItems="center">
        <Icon size="4" glyph="IconCheck" />
        <Box mr="1ch" />
        Hello World
      </Flex>
    </Centered>
  )
}
