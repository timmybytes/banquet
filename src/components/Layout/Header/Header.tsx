import { Flex, useColorMode } from '@chakra-ui/react'
import { Nav } from '@components/Layout/Header/Nav'
import { Logo } from '@components/Logo'
import Link from 'next/link'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Header = ({ ...rest }): React.ReactElement => {
  const { colorMode } = useColorMode()
  return (
    <Flex
      as='nav'
      // Prevents transparent header background when scrolling
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      align='center'
      zIndex={1}
      justify='space-between'
      wrap='wrap'
      w='100%'
      p={4}
      position='sticky'
      top='0'
      {...rest}>
      <Flex align='center'>
        <Link href='/'>
          <a>
            <Logo w='max-content' />
          </a>
        </Link>
      </Flex>
      <Nav />
    </Flex>
  )
}

export default Header
