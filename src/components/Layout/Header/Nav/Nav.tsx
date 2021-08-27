import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react'
import { DarkModeButton } from '@components/DarkModeButton'
import { FOOTER_DATA, HEADER_LINKS } from '@components/Meta'
import Link from 'next/link'
import React, { useRef } from 'react'
import { IoIosMenu } from 'react-icons/io'

type NavItemProps = {
  href: string
  isLast?: boolean
  children?: React.ReactNode
  onClick?: () => void
}

const NavItems = ({ href, isLast, children, ...rest }: NavItemProps) => {
  const { colorMode } = useColorMode()
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display='block'
      cursor='pointer'
      fontSize={{ md: '1.25rem', base: '1.15rem' }}
      {...rest}>
      {!isLast && (
        <Link href={href} passHref>
          <Text
            as='a'
            color={colorMode === 'light' ? 'brand.dark' : 'brand.silver'}
            _hover={{
              color: 'brand.gold',
            }}>
            {children}
          </Text>
        </Link>
      )}
      {/* Removes redundant link for CTA button */}
      {isLast && <Text>{children}</Text>}
    </Text>
  )
}

type LinksProps = {
  onClose?: () => void
}

const Links = ({ onClose }: LinksProps) => (
  <Stack direction={['column', 'row']} spacing={4} align='stretch'>
    {HEADER_LINKS.map(({ href, title }, i) => (
      <Box key={i} h='40px'>
        <NavItems
          href={href}
          onClick={onClose}
          {...{ isLast: i === HEADER_LINKS.length - 1 }}>
          {title}
        </NavItems>
      </Box>
    ))}
  </Stack>
)

const MenuDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <IoIosMenu size='22px' />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            fontFamily='heading'
            fontSize={{ base: '1.75rem', md: '2rem' }}
            fontWeight='700'>
            Menu
          </DrawerHeader>

          <DrawerBody>
            <Box mb={8}>
              <DarkModeButton />
            </Box>
            <Links onClose={onClose} />
          </DrawerBody>

          <DrawerFooter justifyContent='center'>
            <Box as='p' fontSize='sm' color='gray.500' pb='15px'>
              {FOOTER_DATA}
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

type NavProps = {
  children?: React.ReactNode
}

export const Nav = ({ ...rest }: NavProps): React.ReactElement => {
  return (
    <>
      <Box d={{ base: 'initial', md: 'none' }} {...rest}>
        <MenuDrawer />
      </Box>
      <Box d={{ base: 'none', md: 'initial' }} {...rest}>
        <Links />
      </Box>
    </>
  )
}
