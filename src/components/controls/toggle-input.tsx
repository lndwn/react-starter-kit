import * as React from 'react'
import styled from 'styled-components'
import { UIText } from '../ui-text'
import { Button } from './button'
import { animated, useSpring } from 'react-spring'
import {
  SpaceProps,
  BorderRadiusProps,
  compose,
  space,
  borderRadius,
  layout,
  LayoutProps,
} from 'styled-system'

const toggleStyleProps = compose(space, borderRadius, layout)
interface ToggleProps extends SpaceProps, BorderRadiusProps, LayoutProps {}
const Toggle = styled.div<ToggleProps>`
  --background-color: transparent;
  --background-color-checked: ${({ theme }) => theme.colors.accent};
  --background-color-checked-disabled: ${({ theme }) => theme.colors.bg[3]};
  --border-color: ${({ theme }) => theme.colors.bg[4]};
  --border-color-disabled: ${({ theme }) => theme.colors.bg[2]};

  position: relative;
  display: flex;
  align-items: center;
  width: ${({ theme }) => theme.sizes[0]};
  height: ${({ theme }) => theme.sizes[0]};
  margin-right: ${({ theme }) => theme.space[2]};
  background-color: var(--background-color);
  border-width: 2px;
  border-style: solid;
  border-color: var(--border-color);
  padding: 2px;
  background-clip: content-box;
  transition: background-color 150ms ease;
  ${toggleStyleProps};

  input:checked + ${Button} & {
    background-color: var(--background-color-checked);
  }

  input:checked:disabled + ${Button} & {
    background-color: var(--background-color-checked-disabled);
  }

  input:disabled + ${Button} & {
    border-color: var(--border-color-disabled);
  }
`

interface ToggleInputProps {
  label: string
  id: string
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  disabled?: boolean
  type: string
}

const ToggleInput = (props: ToggleInputProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const handleClick = () => inputRef.current?.click()

  return (
    <>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
        disabled={props.disabled}
        style={{ display: 'none' }}
      />
      <Button
        id={`${props.id}-button`}
        onClick={handleClick}
        disabled={props.disabled}
        role="checkbox"
        aria-checked={props.checked}>
        <Toggle borderRadius={props.type === 'checkbox' ? 'micro' : 'full'} />
        <UIText fontWeight="medium">{props.label}</UIText>
      </Button>
    </>
  )
}

export const CheckboxInput = (props: Omit<ToggleInputProps, 'type'>) => {
  return <ToggleInput type="checkbox" {...props} />
}

export const RadioInput = (props: Omit<ToggleInputProps, 'type'>) => {
  return <ToggleInput type="radio" {...props} />
}

const Track = styled.div`
  --background-color: ${({ theme }) => theme.colors.bg[4]};
  --background-color-disabled: ${({ theme }) => theme.colors.bg[1]};
  --background-color-checked: ${({ theme }) => theme.colors.accent};
  --background-color-disabled-checked: ${({ theme }) => theme.colors.bg[3]};

  width: ${({ theme }) => theme.space[4]};
  height: ${({ theme }) => theme.space[3]};
  margin: 0 ${({ theme }) => theme.space[1]};
  padding: 1px;
  background-clip: content-box;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.radii.full};
  display: flex;
  align-items: center;
  position: relative;

  transition: background-color 150ms ease;

  input + ${Button} & {
    background-color: var(--background-color);
  }

  input:checked + ${Button} & {
    background-color: var(--background-color-checked);
  }

  input:disabled + ${Button} & {
    background-color: var(--background-color-disabled);
  }

  input:disabled:checked + ${Button} & {
    background-color: var(--background-color-disabled-checked);
  }
`
const Thumb = styled(animated.div)`
  --background-color: ${({ theme }) => theme.colors.bg[0]};
  --background-color-disabled: ${({ theme }) => theme.colors.bg[0]};
  width: ${({ theme }) => theme.space[3]};
  height: ${({ theme }) => theme.space[3]};
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: var(--background-color);
  position: absolute;
  left: 0;
  border-width: 3px;
  border-style: solid;
  border-color: transparent;
  background-clip: padding-box;

  input:disabled + ${Button} & {
    background-color: var(--background-color-disabled);
  }
`

export const SwitchInput = (props: Omit<ToggleInputProps, 'type'>) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const spring = useSpring({
    transform: props.checked ? 'translateX(50%)' : 'translateX(0%)',
  })
  const handleClick = () => inputRef.current?.click()
  return (
    <>
      <input
        ref={inputRef}
        type="checkbox"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        checked={props.checked}
        style={{ display: 'none' }}
      />
      <Button onClick={handleClick} disabled={props.disabled} pl="2">
        <Track>
          <Thumb style={spring} />
        </Track>
        <UIText>{props.label}</UIText>
      </Button>
    </>
  )
}
