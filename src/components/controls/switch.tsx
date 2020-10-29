import * as React from 'react'
import { Button } from './button'
import styled from 'styled-components'
import { UIText } from 'components/ui-text'
import { useSpring, animated } from 'react-spring'

const Container = styled.div``

const Track = styled.div`
  --border-color: ${({ theme }) => theme.colors.bg[4]};
  --border-color-disabled: ${({ theme }) => theme.colors.bg[2]};
  --background-color: ${({ theme }) => theme.colors.bg[4]};
  --background-color-disabled: ${({ theme }) => theme.colors.bg[2]};
  --background-color-checked: ${({ theme }) => theme.colors.accent};
  --background-color-disabled-checked: ${({ theme }) => theme.colors.bg[2]};

  width: ${({ theme }) => theme.space[4]};
  height: ${({ theme }) => theme.space[3]};
  margin: 0 ${({ theme }) => theme.space[1]};
  background-color: var(--background-color);
  padding: 1px;
  background-clip: content-box;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: var(--border-color);
  border-radius: ${({ theme }) => theme.radii.full};
  display: flex;
  align-items: center;
  position: relative;

  transition: background-color 150ms ease;

  input:checked + ${Button} & {
    background-color: var(--background-color-checked);
  }

  input:checked:disabled + ${Button} & {
    background-color: var(--background-color-disabled-checked);
  }

  input:disabled + ${Button} & {
    border-color: var(--border-color-disabled);
    background-color: var(--background-color-disabled);
  }
`

const Thumb = styled(animated.div)`
  --background-color: ${({ theme }) => theme.colors.whites[0]};
  --background-color-disabled: ${({ theme }) => theme.colors.whites[1]};
  --border-color: ${({ theme }) => theme.colors.blacks[0]};

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

  transition: background-color 150ms ease;

  input:disabled + ${Button} &,
  input:checked:disabled + ${Button} & {
    background-color: var(--background-color-disabled);
  }
`

interface SwitchProps {
  id: string
  name: string
  value: string
  checked: boolean
  disabled?: boolean
  label: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Switch = (props: SwitchProps) => {
  const { label, ...rest } = props
  const inputRef = React.useRef<HTMLInputElement>(null)
  const spring = useSpring({
    transform: rest.checked ? 'translateX(50%)' : 'translateX(0%)',
  })
  const handleClick = () => inputRef.current?.click()
  return (
    <Container>
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
      <Button onClick={handleClick} disabled={rest.disabled} pl="2">
        <Track>
          <Thumb style={spring} />
        </Track>
        <UIText ml="2">{label}</UIText>
      </Button>
    </Container>
  )
}
