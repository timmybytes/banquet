import { Box, Text } from '@chakra-ui/react'
import { SITE_DATA } from '@components/Meta'

export const Logo = ({ ...rest }): React.ReactElement => (
  <Box
    display='flex'
    alignItems='center'
    justifyContent='center'
    p={{ lg: '1rem', sm: '0' }}
    {...rest}>
    <Text
      as='h1'
      color='brand.gold'
      fontWeight='400'
      fontFamily='heading'
      textShadow='.25px .25px 0 #3c3c3c'
      textTransform='uppercase'
      fontSize={{ lg: '2.75rem', md: '2.5rem', sm: '2rem', base: '1.75rem' }}
      p='0 1rem'
      whiteSpace='nowrap'>
      {SITE_DATA.title}
    </Text>
  </Box>
)
