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

  input:checked + label & {
    background-color: var(--background-color-checked);
  }

  input:checked:disabled + label & {
    background-color: var(--background-color-checked-disabled);
  }

  input:disabled + label & {
    border-color: var(--border-color-disabled);
  }
`

interface CheckboxProps {
  id: string
  name: string
  checked: boolean
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  children: (Toggle: React.ReactNode) => React.ReactNode
}
export const Checkbox = (props: CheckboxProps) => {
  return (
    <>
      <input
        id={props.id}
        type="checkbox"
        checked={props.checked}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        style={{ display: 'none' }}
      />
      {props.children(Toggle)}
    </>
  )
}
