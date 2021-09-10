import { Box, Code } from '@chakra-ui/react'

type CodeBlockProps = {
  children?: React.ReactNode
}

export const CodeBlock = ({
  children,
  ...rest
}: CodeBlockProps): React.ReactElement => {
  return (
    <Box
      bg='gray.700'
      color='white'
      rounded='lg'
      as='pre'
      maxW='80vw'
      overflow='scroll'
      {...rest}>
      <Code p={6} bg='inherit' color='inherit' fontWeight='bold'>
        {children}
      </Code>
    </Box>
  )
}
