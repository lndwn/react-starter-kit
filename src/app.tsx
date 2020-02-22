import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
  color: ${(props) => props.theme.colors.text.tertiary};
`

interface IAppProps {
  heading?: string
}

export const App = ({ heading = 'Hello World' }: IAppProps) => {
  return <Heading>{heading}</Heading>
}
