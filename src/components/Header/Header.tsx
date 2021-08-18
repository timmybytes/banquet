import { Box, Flex, Text } from '@chakra-ui/react'
import { Logo } from '@components/Logo'
import { HEADER_LINKS } from '@components/Meta'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { IoMenuOutline } from 'react-icons/io5'

const CloseIcon = () => (
  <IoMdCloseCircleOutline color='brand.dark' size='22px' />
)
const MenuIcon = () => <IoMenuOutline color='brand.dark' size='22px' />

type NavItemProps = {
  href: string
  isLast?: boolean
  toggle: () => void
  children?: React.ReactNode
}

const NavItems = ({
  href,
  isLast,
  toggle,
  children,
  ...rest
}: NavItemProps) => {
  const handleClick = () => {
    toggle()
  }

  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display='block'
      cursor='pointer'
      {...rest}>
      <Link href={href} passHref>
        <Text
          as='a'
          onClick={handleClick}
          _hover={{
            color: 'brand.gold',
          }}>
          {children}
        </Text>
      </Link>
    </Text>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Header = ({ ...rest }): React.ReactElement => {
  const [show, setShow] = useState(false)
  const toggleMenu = () => setShow(!show)

  useEffect(() => {
    setShow(false)
  }, [])

  return (
    <Flex
      as='nav'
      align='center'
      background='white'
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

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>
      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}>
        <Flex
          align={['center', 'center', 'center', 'center']}
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}>
          {HEADER_LINKS.map(({ href, title }, i) => (
            <NavItems
              key={i}
              href={href}
              toggle={toggleMenu}
              {...{ isLast: i === HEADER_LINKS.length - 1 }}>
              {title}
            </NavItems>
          ))}
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
