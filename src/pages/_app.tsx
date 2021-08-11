import '@/styles/_globals.scss'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { AppProps } from 'next/app'

const colors = {
  brand: {
    gold: '#e9c46a',
    silver: '#e5e5e5',
    dark: '#323232',
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
