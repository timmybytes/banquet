import { Box, Text } from '@chakra-ui/react'
import { SITE_DATA } from '@data/SiteData'
import React from 'react'

type LogoProps = {
  children?: React.ReactNode
  sx?: Record<string, unknown>
}

export const Logo = ({
  children,
  sx,
  ...rest
}: LogoProps): React.ReactElement => (
  <Box
    display='flex'
    alignItems='center'
    justifyContent='center'
    p={{ lg: '1rem', sm: '0' }}
    sx={sx}
    {...rest}>
    <Text
      as='h1'
      color='brand.primary'
      fontWeight='400'
      fontFamily='heading'
      textShadow='.25px .25px 0 #3c3c3c'
      textTransform='uppercase'
      fontSize={{ lg: '2.75rem', md: '2.5rem', sm: '2rem', base: '1.75rem' }}
      p='0 1rem'
      whiteSpace='nowrap'>
      {SITE_DATA.title}
    </Text>
    {children}
  </Box>
)
