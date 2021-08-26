# Using Chakra UI in Banquet

- [Custom Theme](#custom-theme)
- [Using Chakra Components](#using-chakra-components)

Banquet comes with [Chakra UI](https://chakra-ui.com/docs/) as its default UI library. Chakra is one of the most versatile component libraries available, and offers performant, accessible, and responsive UI elements. You can import Chakra components wherever you need them, and customize the overall look and feel of your site by changing the Chakra theme files.

## Custom theme

A few defaults are already set up for you, and you can find them in the [`/src/theme`](../src/theme/) directory. These are then imported in the Chakra Provider component, which wraps your entire site and makes all theme settings accessible to all components by default (i.e., no need to pass as props or import into each component.

You can customize both global styles as well as individual components in the theme files. For scalability and per Chakra's recommendations, the overall theme is split into multiple files with different areas of focus, then imported into a central theme file.

For example, here some global defaults are defined, including general link appearance and behavior with a short hover transition between colors. Notice some of the colors here are custom ones like `brand.gold`, which itself is defined in the `colors.ts` file.

```ts
// src/theme/styles.ts
export const styles = {
  global: {
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
    fontFamily:
      'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, "Helvetica Neue", Arial, sans-serif',
    a: {
      color: 'cyan.600',
      transition: '.3s',
      _hover: {
        color: 'cyan.800',
      },
    },
    code: {
      fontFamily: 'Menlo, monospace',
      fontSize: '1rem',
      background: 'gray.900',
      color: 'brand.gold',
      borderRadius: '4px',
      padding: '2px 4px',
    },
  },
}
```

The `styles.ts` file is then imported in the theme index file.

```ts
// src/theme/index.ts
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
```

The theme index is then imported to the top level provider.

```tsx
// src/pages/_app.tsx
import { ChakraProvider } from '@chakra-ui/react'
import { Layout } from '@components/Layout'
import '@fontsource/inter/200.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/900.css'
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/700.css'
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
```

There are many ways in which to customize and expand the theme defaults, including conditional styles, individual component settings, and more. [Read Chakra's documentation](https://chakra-ui.com/docs/theming/) for more information.

## Using Chakra Components

You can import Chakra components wherever you need them in your project, and customize as much or as little as you like. You can use simple Chakra components like `Box`, `Text`, etc., piece by piece as you build, or combine them into more complex components. Banquet does this with many of the `Layout` components, like `Article` and `Section`, which combine basic Chakra elements with some predefined styles.

```tsx
// src/components/Article/Article.tsx
import { Box, Text } from '@chakra-ui/react'

type ArticleProps = {
  heading?: string
  body?: string
  children?: React.ReactNode
}

export const Article = ({
  children,
  heading,
  body,
  ...rest
}: ArticleProps): React.ReactElement => {
  return (
    <Box p={{ base: '0', md: '1rem' }} {...rest}>
      <Text
        as='h3'
        my='1rem'
        fontFamily='heading'
        fontSize={{ base: '1.75rem', md: '2rem' }}
        maxW='30ch'
        fontWeight='700'>
        {heading}
      </Text>
      <Text m='1rem 0' maxW='65ch' fontSize='lg' opacity='0.8' lineHeight={1.5}>
        {body}
        {children}
      </Text>
    </Box>
  )
}
```

Here the `Article` component takes optional `heading` and `body` props for something like a short text post, and can also take more substantive children that are also encapsulated in the "body" section of the component with unified styling. This kind of "plug-and-play" capability with so many Chakra components make it easy to customize things to your liking and allow your project to scale as needed.

## Further Reading

Banquet uses Chakra in a pretty standard setup, and this is by no means the only way to do things, so for more advanced customization, you should consult the [Chakra docs](https://chakra-ui/docs).
