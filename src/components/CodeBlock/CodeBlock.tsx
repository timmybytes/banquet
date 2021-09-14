import { useWindowSize } from '@/hooks/useWindowSize'
import { Box, Code } from '@chakra-ui/react'

type CodeBlockProps = {
  children?: React.ReactNode
}

export const CodeBlock = ({
  children,
  ...rest
}: CodeBlockProps): React.ReactElement => {
  const viewWidth = useWindowSize().width
  return (
    <Box
      bg='gray.700'
      color='white'
      rounded='lg'
      as='pre'
      // Check viewWidth exists, prevent container overflow on small screens
      maxW={viewWidth && viewWidth < 550 ? '85vw' : '95vw'}
      overflow='scroll'
      {...rest}>
      <Code p={6} bg='inherit' color='inherit'>
        {children}
      </Code>
    </Box>
  )
}
