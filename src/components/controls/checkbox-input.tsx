import * as React from 'react'
import styled from 'styled-components'
import { UIText } from '../ui-text'
import { Button } from './button'

const Box = styled.div`
  width: ${({ theme }) => theme.sizes[0]};
  height: ${({ theme }) => theme.sizes[0]};
  position: absolute;
  background-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.bg[4]};
  border-radius: ${({ theme }) => theme.radii.micro};
  margin-left: -0.5rem;
  padding: 2px;
  background-clip: content-box;
  transition: background-color 150ms ease;

  input:checked + ${Button} & {
    background-color: ${({ theme }) => theme.colors.accent};
  }

  input:checked:disabled + ${Button} & {
    background-color: ${({ theme }) => theme.colors.bg[4]};
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

export const Checkbox = (props: CheckboxProps) => {
  const { label, ...rest } = props
  const inputRef = React.useRef<HTMLInputElement>(null)
  const handleClick = () => {
    inputRef.current?.click()
  }

  return (
    <>
      <input
        ref={inputRef}
        type="checkbox"
        {...rest}
        style={{ display: 'none' }}
      />
      <Button onClick={handleClick} disabled={props.disabled}>
        <Box className={props.checked ? 'checked' : undefined} />
        <UIText ml="3" fontWeight="medium">
          {label}
        </UIText>
      </Button>
    </>
  )
}
