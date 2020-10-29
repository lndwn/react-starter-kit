import * as React from 'react'
import { DropdownMenu } from 'components/controls/dropdown'
import { Box, UIText } from 'components'

export const Dropdown = () => {
  return (
    <Box>
      <UIText fontSize="1" mb="3" ml="3" fontWeight="medium">
        Dropdown Menu
      </UIText>
      <Box
        p="3"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="bg.2"
        borderRadius="large">
        <DropdownMenu>
          <UIText>30 Minutes</UIText>
          <UIText>60 Minutes</UIText>
          <UIText>90 Minutes</UIText>
          <UIText>120 Minutes</UIText>
        </DropdownMenu>
      </Box>
    </Box>
  )
}
