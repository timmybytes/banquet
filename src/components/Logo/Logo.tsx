import { Box, Image, Text } from '@chakra-ui/react'

export const Logo = ({ ...rest }): React.ReactElement => (
  <Box display='flex' alignItems='center' p={{ lg: '1rem', sm: '0' }} {...rest}>
    <Image src='/Icon-Dark.svg' width='48px' height='48px' />
    <Text
      as='h1'
      fontWeight='900'
      fontStyle='italic'
      fontSize={{ lg: '2rem', md: '2.5rem', sm: '2rem', base: '1.75rem' }}
      p='0 1rem'
      whiteSpace='nowrap'>
      Main Course
    </Text>
  </Box>
)
