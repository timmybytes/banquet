import { ChakraProvider } from '@chakra-ui/react'
import { Layout } from '@components/Layout'
import '@fontsource/inter/200.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/900.css'
import '@fontsource/playfair-display/900.css'
import { theme } from '@theme/index'
import { AppProps } from 'next/app'

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
