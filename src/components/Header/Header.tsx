import { EmailIcon, InfoIcon, StarIcon } from '@chakra-ui/icons'
import { Box, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

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
    <Box as='header' padding='.25rem 1rem'>
      <Flex justifyContent='space-between' alignItems='center'>
        <Flex width='100%' justifyContent='flex-start' alignItems='center'>
          <Image
            src='/main-course-logo.svg'
            alt='Main Course Logo'
            maxWidth='58px'
            border='1px solid black'
            borderRadius='50%'
            p='10px'
          />
          <Text
            as='h1'
            p='0 1rem'
            fontSize='2rem'
            fontWeight='700'
            fontStyle='italic'>
            Main Course
            <Text
              as='span'
              fontSize='1.5rem'
              fontStyle='normal'
              fontFamily='Source Sans Pro'
              fontWeight='300'>
              {' '}
              — A hearty Next.js boilerplate
            </Text>
          </Text>
        </Flex>
        <Spacer />
        <Box as='nav'>
          <Flex flexDirection='row' justifyContent='space-between'>
            {LINKS.map(({ href, title, icon }) => (
              <Flex flexDirection='row' p='0 1rem' key={title}>
                <Link href={href} key={href}>
                  <Box
                    as='a'
                    fontSize='1rem'
                    fontStyle='normal'
                    fontFamily='Source Sans Pro'
                    fontWeight='300'>
                    {icon}
                    <Text as='span' pl={{ base: '.5rem' }}>
                      {title}
                    </Text>
                  </Box>
                </Link>
              </Flex>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
