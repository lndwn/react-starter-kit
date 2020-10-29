import * as React from 'react'
import styled from 'styled-components'
import { UIText } from '../ui-text'
import { Button } from './button'

const Checkbox = styled.div`
  --background-color: transparent;
  --background-color-checked: ${({ theme }) => theme.colors.accent};
  --background-color-checked-disabled: ${({ theme }) => theme.colors.bg[3]};
  --border-color: ${({ theme }) => theme.colors.bg[4]};
  --border-color-disabled: ${({ theme }) => theme.colors.bg[2]};

  width: ${({ theme }) => theme.sizes[0]};
  height: ${({ theme }) => theme.sizes[0]};
  background-color: var(--background-color);
  border-width: 1px;
  border-style: solid;
  border-color: var(--border-color);
  border-radius: ${({ theme }) => theme.radii.micro};
  /* margin-left: -0.5rem; */
  padding: 1px;
  background-clip: content-box;
  transition: background-color 150ms ease;

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

interface CheckboxProps {
  label: string
  id: string
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  disabled?: boolean
}

export const CheckboxInput = (props: CheckboxProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const handleClick = () => inputRef.current?.click()

  return (
    <>
      <input
        ref={inputRef}
        type="checkbox"
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
        aria-checked={props.checked}
        pr="4">
        <Checkbox />
        <UIText ml="3" fontWeight="medium">
          {props.label}
        </UIText>
      </Button>
    </>
  )
}
