import '@/styles/_globals.scss'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { AppProps } from 'next/app'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  // console.log(theme);
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
