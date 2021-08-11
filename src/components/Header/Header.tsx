import { EmailIcon, InfoIcon, StarIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const LOGO = '🥘'

const LINKS = [
  {
    href: '/',
    title: 'Home',
    icon: <StarIcon />,
  },
  {
    href: '/about',
    title: 'About',
    icon: <InfoIcon />,
  },
  {
    href: '/contact',
    title: 'Contact',
    icon: <EmailIcon />,
  },
]

export const Header = (): React.ReactElement => {
  return (
    <Box
      as='header'
      display='flex'
      flexDirection='column'
      padding='.25rem 1rem'
      justifyContent='center'
      alignItems='center'>
      <Flex
        width='100%'
        justifyContent='center'
        alignItems='center'
        fontStyle='italic'>
        <Image src='/main-course-logo.svg' width='48px' height='48px' />

        <Text
          as='h1'
          p='0 1rem'
          fontSize='clamp(1.75rem, 3vw, 4rem)'
          fontWeight='900'>
          Main Course
        </Text>
      </Flex>
      <Text
        as='span'
        display='block'
        fontSize='clamp(1.25rem, 2vw, 2rem)'
        fontFamily='Source Sans Pro'
        fontWeight='400'>
        A hearty Next.js boilerplate
      </Text>
    </Box>
  )
}
