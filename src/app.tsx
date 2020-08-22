import React from 'react'
import styled from 'styled-components'
import { Flex } from './components'
import { IconIconsSmall } from 'assets'

const Heading = styled.h1`
  color: ${(props) => props.theme.colors.text[2]};
`

interface IAppProps {
  heading?: string
}

export const App = ({ heading = 'Hello World' }: IAppProps) => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Heading>{heading}</Heading>
      <Flex>
        <IconIconsSmall />
      </Flex>
    </Flex>
  )
}
