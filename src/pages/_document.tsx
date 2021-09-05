import { ColorModeScript } from '@chakra-ui/react'
import { CustomHead } from '@components/CustomHead'
import { theme } from '@theme/index'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import React from 'react'

class MyDocument extends Document {
  // eslint-disable-next-line
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render(): React.ReactElement {
    return (
      <Html>
        <Head>
          <CustomHead />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
