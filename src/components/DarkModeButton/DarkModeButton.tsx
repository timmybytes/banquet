import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, useColorMode } from '@chakra-ui/react'

type DarkModeButtonProps = {
  children?: React.ReactNode
  sx?: any
}

export const DarkModeButton = ({
  sx,
  ...rest
}: DarkModeButtonProps): React.ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button
      bg={'none'}
      color={colorMode === 'light' ? 'brand.dark' : 'brand.gold'}
      borderRadius='full'
      p={0}
      onClick={toggleColorMode}
      sx={sx}
      {...rest}>
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}
