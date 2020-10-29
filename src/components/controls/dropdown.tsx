import * as React from 'react'
import styled from 'styled-components'
import { DefaultButton } from './button'
import { useTransition, animated } from 'react-spring'
import { UIText } from 'components/ui-text'
import { Icon } from 'components/icon'
import { Flex } from 'components/box'

const DropdownContainer = styled.div`
  position: relative;
`

const MenuContainer = styled(animated.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
  margin-top: 0.25rem;
`

const Menu = styled.ul`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg[1]};
  margin: 0;
  border-radius: ${({ theme }) => theme.radii.micro};
  padding: ${({ theme }) => theme.space[2]} 0;
`

const MenuItem = styled.li`
  height: ${({ theme }) => theme.sizes[1]};
  padding: 0 ${({ theme }) => theme.space[3]};
  display: flex;
  align-items: center;
`

interface DropdownMenuProps {
  children: React.ReactNode[]
}

export const DropdownMenu = (props: DropdownMenuProps) => {
  const menuRef = React.useRef<HTMLUListElement>(null)
  const [isOpen, setIsOpen] = React.useState(false)
  const transition = useTransition(isOpen, null, {
    from: {
      height: 0,
    },
    // @ts-expect-error
    enter: () => async (next) =>
      await next({
        height: menuRef.current?.offsetHeight ?? 0,
      }),
    leave: {
      height: 0,
    },
  })
  const handleClick = () => setIsOpen((open) => !open)

  return (
    <DropdownContainer>
      <Flex width="100%">
        <DefaultButton onClick={handleClick} pr="1" flex="1">
          <UIText mr="auto">Dropdown</UIText>
          <Icon size="4" glyph="IconAngleDown" />
        </DefaultButton>
      </Flex>
      {transition.map(
        ({ item, props: spring, key }) =>
          item && (
            <MenuContainer key={key} style={spring}>
              <Menu ref={menuRef}>
                {props.children.map((item, key) => (
                  <MenuItem key={key}>{item}</MenuItem>
                ))}
              </Menu>
            </MenuContainer>
          )
      )}
    </DropdownContainer>
  )
}
