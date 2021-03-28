import * as React from 'react'
import { useSpring, useTransition, animated } from '@react-spring/web'
import { Box } from './box'
import { IconButton } from './controls'
import { Icon } from './icon'
import { UIText } from './ui-text'
import { ThemeContext } from 'styled-components'

interface SidebarProps {
  isOpen?: boolean
}

export const Sidebar = (props: SidebarProps) => {
  const [isMenuOpen, setMenuIsOpen] = React.useState(false)
  const handleMenuClick = () => setMenuIsOpen((isOpen) => !isOpen)
  const theme = React.useContext(ThemeContext)

  const menuSpring = useSpring({
    
    transform:
      props.isOpen ?? isMenuOpen ? 'translateX(0%)' : 'translateX(-100%)',
  })

  const iconTransition = useTransition([<Icon glyph="IconTimes" size="4" />, <Icon glyph="IconBars" size="4" />], {
    from: {
      opacity: 0,
      // transform: 'rotate(0deg)',
    },
    enter: {
      opacity: 1,
      // transform: 'rotate(720deg)',
    },
    leave: {
      opacity: 0,
      // transform: 'rotate(1440deg)',
    },
  })
  const iconFragment = iconTransition((style, item) => <animated.div style={{
      position: 'absolute', ...style}}>{item}</animated.div>)

  return (
    <>
      {/* space-holder for the menu button */}
      <Box height="2" />
      <animated.div
        style={{
          position: 'fixed',
          overflow: 'visible',
          zIndex: theme.zIndices.draw,
          top: 0,
          left: 0,
          ...menuSpring,
        }}>
        <Box position="absolute" left="100%">
          <IconButton onClick={handleMenuClick} ml="3" mt="2">
            {iconTransition() =>
              isOpen ? (
                <animated.div style={spring} key={key}>
                  <Icon glyph="IconTimes" size="4" />
                </animated.div>
              ) : (
                <animated.div style={spring} key={key}>
                  <Icon glyph="IconBars" size="4" />
                </animated.div>
              )
            )}
          </IconButton>
        </Box>
        <Box p="3" bg="bg.1" minWidth="280px" height="100vh" overflowY="auto">
          <UIText>Menu</UIText>
        </Box>
      </animated.div>
    </>
  )
}
