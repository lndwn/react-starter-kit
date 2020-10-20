import * as React from 'react'
import styled from 'styled-components'
import { colorStyles } from './colors.css'
import { shapeStyles } from './shape.css'
import { focusStyles } from './focus.css'
import { hoverStyles } from './hover.css'
import { Box } from 'components/box'
import { UIText } from 'components/ui-text'
import { useSpring } from 'react-spring'

const Input = styled.input`
  ${colorStyles}
  ${focusStyles}
  ${shapeStyles}
  ${hoverStyles}

  --background-color-active: ${({ theme }) => theme.colors.bg[3]};
  --background-color-disabled: ${({ theme }) => theme.colors.bg[1]};
  --background-color-hover: ${({ theme }) => theme.colors.bg[2]};
  --background-color: ${({ theme }) => theme.colors.bg[1]};
  --border-color: transparent;
  --box-shadow-color-focus: ${({ theme }) => theme.colors.bg[4]};
  --color-disabled: ${({ theme }) => theme.colors.bg[4]};
  --color: ${({ theme }) => theme.colors.text[0]};

  ::placeholder {
    color: var(--color-disabled);
  }

  display: block;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  caret-color: ${({ theme }) => theme.colors.accent};
  width: 100%;
`

interface TextInputProps {
  label?: string
  id: string
  name: string
  value: string
  placeholder: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}

export const TextInput = (props: TextInputProps) => {
  const { label, ...rest } = props
  return (
    <Box>
      {label && (
        <UIText fontWeight="medium" mb="2" fontSize="1">
          {label}
        </UIText>
      )}
      <Input type="text" {...rest} />
    </Box>
  )
}
