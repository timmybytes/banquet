import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, useColorMode } from '@chakra-ui/react'

type DarkModeButtonProps = {
  children?: React.ReactNode
}

export const DarkModeButton = ({
  ...rest
}: DarkModeButtonProps): React.ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button
      bg={colorMode === 'light' ? 'brand.dark' : 'brand.gold'}
      color={colorMode === 'light' ? 'brand.gold' : 'brand.dark'}
      borderRadius='full'
      p={0}
      onClick={toggleColorMode}
      mr={8}>
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}
