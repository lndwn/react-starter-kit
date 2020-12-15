import styled from 'styled-components'
import { shapeStyles } from './shape.css'
import { colorStyles } from './colors.css'
import {
  SpaceProps,
  compose,
  space,
  FlexboxProps,
  flexbox,
} from 'styled-system'

const buttonStyleProps = compose(space, flexbox)
interface ButtonProps extends SpaceProps, FlexboxProps {}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  :disabled {
    cursor: not-allowed;
  }
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  display: flex;
  align-items: center;

  ${colorStyles};
  ${shapeStyles};
  ${buttonStyleProps};

  --background-color-active: ${({ theme }) => theme.colors.bg[2]};
  --background-color-disabled: transparent;
  --background-color-hover: ${({ theme }) => theme.colors.bg[1]};
  --background-color: transparent;
  --border-color: transparent;
  --box-shadow-color-focus: ${({ theme }) => theme.colors.bg[3]};
  --color-disabled: ${({ theme }) => theme.colors.bg[4]};
  --color: ${({ theme }) => theme.colors.text[0]};
`

export const DefaultButton = styled(Button)`
  --background-color-active: ${({ theme }) => theme.colors.bg[3]};
  --background-color-disabled: ${({ theme }) => theme.colors.bg[1]};
  --background-color-hover: ${({ theme }) => theme.colors.bg[2]};
  --background-color: ${({ theme }) => theme.colors.bg[1]};
  --border-color: transparent;
  --box-shadow-color-focus: ${({ theme }) => theme.colors.bg[3]};
  --color: ${({ theme }) => theme.colors.text[0]};
`

export const IconButton = styled(DefaultButton)`
  width: ${({ theme }) => theme.sizes[1]};
  padding: 0;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radii.full};
`

export const PrimaryButton = styled(DefaultButton)`
  --background-color-active: ${({ theme }) => theme.colors.accent}40;
  --background-color-disabled: ${({ theme }) => theme.colors.bg[1]};
  --background-color-hover: ${({ theme }) => theme.colors.accent}30;
  --background-color: ${({ theme }) => theme.colors.accent}20;
  --border-color: transparent;
  --box-shadow-color-focus: ${({ theme }) => theme.colors.accent}40;
  --color: ${({ theme }) => theme.colors.accent};
`

export const DestructiveButton = styled(DefaultButton)`
  --background-color-active: ${({ theme }) => theme.colors.error}40;
  --background-color-disabled: ${({ theme }) => theme.colors.bg[1]};
  --background-color-hover: ${({ theme }) => theme.colors.error}30;
  --background-color: ${({ theme }) => theme.colors.error}20;
  --border-color: transparent;
  --box-shadow-color-focus: ${({ theme }) => theme.colors.error}40;
  --color: ${({ theme }) => theme.colors.error};
`
