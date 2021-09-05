import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { colors } from './colors'
import { fonts } from './fonts'
import { styles } from './styles'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  styles,
  fonts,
  colors,
  config,
})
