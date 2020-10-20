import * as React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { Icon } from '../icon'
import { UIText } from '../ui-text'
import { DefaultButton } from './button'

const Chip = styled(DefaultButton)`
  display: flex;
  align-items: center;
`

interface RadioChipProps {
  checked: boolean
  value: string
  name: string
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  label: string
  disabled?: boolean
}

export const RadioChip = (props: RadioChipProps) => {
  const spring = useSpring({
    opacity: props.checked ? 1 : 0,
    width: props.checked ? '1.25rem' : '0rem',
  })

  return (
    <Chip
      value={props.value}
      onClick={props.handleClick}
      disabled={props.disabled}>
      <animated.div style={spring}>
        <Icon
          ml={-2}
          size="4"
          glyph="IconCheck"
          color={props.disabled ? 'bg.4' : 'accent'}
        />
      </animated.div>
      <UIText fontWeight="medium">{props.label}</UIText>
    </Chip>
  )
}
