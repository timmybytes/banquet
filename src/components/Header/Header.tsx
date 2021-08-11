import {
  ChevronDownIcon,
  ChevronUpIcon,
  EmailIcon,
  InfoIcon,
  StarIcon,
} from '@chakra-ui/icons'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { Logo } from '@components/Logo'
import Link from 'next/link'
import React, { useState } from 'react'

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
    href: '/examples',
    title: 'Examples',
    icon: <EmailIcon />,
  },
  {
    href: 'https://github.com/timmybytes/main-course',
    title: (
      <Button size='sm' rounded='md' color='brand.gold' background='brand.dark'>
        Fork on GitHub
      </Button>
    ),
    icon: '',
  },
]

const CloseIcon = () => (
  <ChevronUpIcon color='brand.dark' width='32px' height='32px' />
)
const MenuIcon = () => (
  <ChevronDownIcon color='brand.dark' width='32px' height='32px' />
)

type NavItemProps = {
  href: string
  isLast?: boolean
  children?: React.ReactNode
}

const NavItems = ({ href, isLast, children, ...rest }: NavItemProps) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display='block'
      {...rest}>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </Text>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Header = ({ ...rest }): React.ReactElement => {
  const [show, setShow] = useState(false)
  const toggleMenu = () => setShow(!show)

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      p={4}
      {...rest}>
      <Flex align='center'>
        <Logo w='max-content' />
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
          {LINKS.map(({ href, title }, i) => (
            <NavItems
              key={i}
              href={href}
              {...{ isLast: i === LINKS.length - 1 }}>
              {title}
            </NavItems>
          ))}
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
