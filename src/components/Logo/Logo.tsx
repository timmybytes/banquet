import { Box, Image, Text } from '@chakra-ui/react'

export const Logo = ({ ...rest }): React.ReactElement => (
  <Box display='flex' alignItems='center' {...rest}>
    <Image
      src='/Icon-Dark.svg'
      width={{ base: '48px', lg: '64px' }}
      height={{ base: '48px', lg: '64px' }}
    />
    <Text
      as='h1'
      fontWeight='900'
      fontStyle='italic'
      fontSize={{ lg: '3rem', md: '2.5rem', sm: '2rem', base: '1.75rem' }}
      p='0 1rem'
      whiteSpace='nowrap'>
      Main Course
    </Text>
  </Box>
)
