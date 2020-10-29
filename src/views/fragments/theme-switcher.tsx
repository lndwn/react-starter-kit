import * as React from 'react'
import { ColorScheme } from 'utils'
import { UIText, Box, RadioInput } from 'components'
import { AppDispatch } from 'store'
import { setColorScheme } from 'store/theme'
import { AppState } from 'store/root-reducer'
import { connect, ConnectedProps } from 'react-redux'

const mapState = (state: AppState) => ({
  colorScheme: state.colorScheme.overrideScheme,
})
const mapDispatch = (dispatch: AppDispatch) => ({
  setColorScheme: (scheme?: ColorScheme) => dispatch(setColorScheme(scheme)),
})
const connector = connect(mapState, mapDispatch)
type ColorSchemeSwitcherProps = ConnectedProps<typeof connector>

const ColorSchemeSwitcher = (props: ColorSchemeSwitcherProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget as HTMLInputElement
    switch (value) {
      case 'light':
        props.setColorScheme('light')
        break
      case 'dark':
        props.setColorScheme('dark')
        break
      case 'system':
      default:
        props.setColorScheme(undefined)
        break
    }
  }

  return (
    <Box>
      <UIText ml="3" mb="3" fontSize="1" fontWeight="medium">
        Color Scheme
      </UIText>
      <Box
        p="3"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="bg.2"
        borderRadius="large">
        <RadioInput
          id="system-scheme"
          name="color-scheme"
          checked={props.colorScheme === undefined}
          onChange={handleChange}
          value="system"
          label="System"
        />
        <Box mr="1" />
        <RadioInput
          id="dark-scheme"
          name="color-scheme"
          checked={props.colorScheme === 'dark'}
          onChange={handleChange}
          value="dark"
          label="Dark"
        />
        <Box mr="1" />
        <RadioInput
          id="light-scheme"
          name="color-scheme"
          checked={props.colorScheme === 'light'}
          onChange={handleChange}
          value="light"
          label="Light"
        />
      </Box>
    </Box>
  )
}

const ConnectedThemeSwitcher = connector(ColorSchemeSwitcher)
export { ConnectedThemeSwitcher as ThemeSwitcher }
