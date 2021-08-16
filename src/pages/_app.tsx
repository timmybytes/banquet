import '@/styles/_globals.scss'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Layout } from '@components/Layout'
import { colors } from '@utils/colors'
import { AppProps } from 'next/app'

const theme = extendTheme({ colors })

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
