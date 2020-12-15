import * as React from 'react'
import {
  Box,
  Flex,
  UIText,
  RadioInput,
  CheckboxInput,
  DefaultButton,
  PrimaryButton,
  DestructiveButton,
  SwitchInput,
  Button,
} from 'components'
import { TextInput } from 'components/controls/text-input'
import { Checkbox } from 'components/controls/checkbox'

export const Controls = () => {
  const [isChecked1, setIsChecked1] = React.useState(false)
  const handleCheckbox1Change = (event: React.ChangeEvent<HTMLInputElement>) =>
    setIsChecked1(event.target.checked)
  const [isChecked2, setIsChecked2] = React.useState(false)
  const handleCheckbox2Change = (event: React.ChangeEvent<HTMLInputElement>) =>
    setIsChecked2(event.target.checked)

  const [isChecked3, setIsChecked3] = React.useState(false)
  const handleCheckbox3Change = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event)
    setIsChecked3(event.target.checked)
  }

  const [isDisabled, setIsDisabled] = React.useState<boolean>(false)
  const handleDemoRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, checked } = event.currentTarget
    if (value === 'disabled' && checked) setIsDisabled(true)
    if (value === 'enabled' && checked) setIsDisabled(false)
  }

  const [textInputValue, setTextInputValue] = React.useState<string>('')
  const handleTextInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTextInputValue(event.target.value)

  const [isOn, setIsOn] = React.useState(true)
  const handleSwitchChange = () => setIsOn((on) => !on)

  return (
    <Box>
      <UIText ml="3" mb="3" fontSize="1" fontWeight="medium">
        Controls
      </UIText>
      <Box
        p="3"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="bg.2"
        borderRadius="large">
        <CheckboxInput
          id="demo-checkbox-1"
          name="demo-checkboxes"
          onChange={handleCheckbox1Change}
          label="Checkbox input"
          value="demo-checkbox-1"
          checked={isChecked1}
          disabled={isDisabled}
        />
        <CheckboxInput
          id="demo-checkbox-2"
          name="demo-checkboxes"
          onChange={handleCheckbox2Change}
          label="Checkbox input"
          value="demo-checkbox-2"
          checked={isChecked2}
          disabled={isDisabled}
        />
        <RadioInput
          id="demo-radio-1"
          name="demo-radios"
          onChange={handleDemoRadioChange}
          label="Enabled"
          value="enabled"
          checked={!isDisabled}
        />
        <RadioInput
          id="demo-radio-2"
          name="demo-radios"
          onChange={handleDemoRadioChange}
          label="Disabled"
          value="disabled"
          checked={isDisabled}
        />
        <SwitchInput
          id="demo-switch"
          name="demo-switch"
          onChange={handleSwitchChange}
          label="Enabled"
          value="enabled"
          disabled={isDisabled}
          checked={isOn}
        />
        <Checkbox
          id="new-checkbox"
          name="neue"
          value="asdf"
          onChange={handleCheckbox3Change}
          checked={isChecked3}>
          {(Toggle) => (
            <Button as="label" htmlFor="new-checkbox">
              <Toggle />
              We in there
            </Button>
          )}
        </Checkbox>
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
          <DefaultButton mr="auto" disabled={isDisabled}>
            Save
          </DefaultButton>
          <PrimaryButton disabled={isDisabled}>Submit</PrimaryButton>
        </Flex>
      </Box>
    </Box>
  )
}
