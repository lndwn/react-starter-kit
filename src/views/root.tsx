import * as React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import { store } from 'store'
import { ThemeProvider } from 'styled-components'
import { defaultTheme, darkTheme } from 'theme'
import { usePreferColorScheme, useDocumentTitle, ColorScheme } from 'utils'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from 'style/global-style.sc'
import {
  Box,
  Centered,
  Flex,
  Icon,
  UIText,
  RadioChip,
  Radio,
  Checkbox,
  DefaultButton,
  PrimaryButton,
  DestructiveButton,
} from 'components'
import { TextInput } from 'components/controls/text-input'

export const Root = () => {
  useDocumentTitle('Root — RSK')

  const [forcedScheme, setForcedScheme] = React.useState<ColorScheme>()

  const handleThemeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget as HTMLButtonElement
    if (forcedScheme === value) return void setForcedScheme(undefined)
    return void setForcedScheme(value as ColorScheme)
  }

  const [checkboxValues, setCheckboxValues] = React.useState<string[]>([])
  const handleDemoCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, checked } = event.currentTarget
    if (checked) setCheckboxValues((vals) => [...(vals ?? []), value])
    else setCheckboxValues((vals) => vals.filter((val) => val !== value))
  }

  const [isDisabled, setIsDisabled] = React.useState<boolean>(false)
  const handleDemoRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, checked } = event.currentTarget
    if (value === 'disabled' && checked) setIsDisabled(true)
    if (value === 'enabled' && checked) setIsDisabled(false)
  }

  const { theme, scheme } = usePreferColorScheme({
    light: defaultTheme,
    dark: darkTheme,
    forceScheme: forcedScheme,
  })

  const [textInputValue, setTextInputValue] = React.useState<string>('')
  const handleTextInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTextInputValue(event.target.value)

  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Centered width="100vw" height="100vh">
            <Box minWidth={280}>
              <Flex alignItems="center">
                <Icon size="4" mr="2" glyph="IconCheck" color="limegreen" />
                Ready to roll
              </Flex>
              <Box
                mt="3"
                px="3"
                pt="2"
                pb="3"
                borderWidth="1px"
                borderStyle="solid"
                borderColor="bg.2"
                borderRadius="large">
                <UIText mb="2" mt="1" fontSize="1" fontWeight="medium">
                  Color Mode
                </UIText>
                <Flex>
                  <RadioChip
                    name="color-scheme"
                    checked={scheme === 'light' && Boolean(forcedScheme)}
                    handleClick={handleThemeClick}
                    value="light"
                    label="Light"
                    disabled={isDisabled}
                  />
                  <Box mr="1" />
                  <RadioChip
                    name="color-scheme"
                    checked={scheme === 'dark' && Boolean(forcedScheme)}
                    handleClick={handleThemeClick}
                    value="dark"
                    label="Dark"
                    disabled={isDisabled}
                  />
                </Flex>
              </Box>
              <Box
                mt="3"
                px="3"
                pt="2"
                pb="3"
                borderWidth="1px"
                borderStyle="solid"
                borderColor="bg.2"
                borderRadius="large">
                <UIText mb="2" mt="1" fontSize="1" fontWeight="medium">
                  Controls
                </UIText>
                <Checkbox
                  id="demo-checkbox-1"
                  name="demo-checkboxes"
                  onChange={handleDemoCheckboxChange}
                  label="Checkbox input"
                  value="demo-checkbox-1"
                  checked={checkboxValues.includes('demo-checkbox-1')}
                  disabled={isDisabled}
                />
                <Checkbox
                  id="demo-checkbox-2"
                  name="demo-checkboxes"
                  onChange={handleDemoCheckboxChange}
                  label="Checkbox input"
                  value="demo-checkbox-2"
                  checked={checkboxValues.includes('demo-checkbox-2')}
                  disabled={isDisabled}
                />
                <Radio
                  id="demo-radio-1"
                  name="demo-radios"
                  onChange={handleDemoRadioChange}
                  label="Enabled"
                  value="enabled"
                  checked={!isDisabled}
                />
                <Radio
                  id="demo-radio-2"
                  name="demo-radios"
                  onChange={handleDemoRadioChange}
                  label="Disabled"
                  value="disabled"
                  checked={isDisabled}
                />
                <Box mt="3">
                  <TextInput
                    id="text-input"
                    value={textInputValue}
                    placeholder="Some placeholder text"
                    onChange={handleTextInputChange}
                    name="text-input"
                    label="Text input label"
                    disabled={isDisabled}
                  />
                </Box>
                <Flex mt="3">
                  <DestructiveButton mr="1" disabled={isDisabled}>
                    Cancel
                  </DestructiveButton>
                  <DefaultButton mr="1" disabled={isDisabled}>
                    Save
                  </DefaultButton>
                  <PrimaryButton disabled={isDisabled}>Submit</PrimaryButton>
                </Flex>
              </Box>
            </Box>
          </Centered>
        </Router>
        <GlobalStyle />
      </ThemeProvider>
    </StoreProvider>
  )
}
