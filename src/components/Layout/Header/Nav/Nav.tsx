import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react'
import { DarkModeButton } from '@components/DarkModeButton'
import { FOOTER_DATA, HEADER_LINKS } from '@data/SiteData'
import Link from 'next/link'
import React, { useRef } from 'react'
import { IoIosMenu } from 'react-icons/io'

type LinkItemProps = {
  href: string
  isLast?: boolean
  children?: React.ReactNode
  onClick?: () => void
}

const LinkItems = ({ href, isLast, children, ...rest }: LinkItemProps) => {
  const { colorMode } = useColorMode()
  return (
    <>
      {!isLast && (
        <Link href={href} passHref {...rest}>
          <Text
            as='a'
            color={colorMode === 'light' ? 'brand.dark' : 'brand.light'}
            _hover={{
              color: 'brand.primary',
            }}>
            {children}
          </Text>
        </Link>
      )}
      {/* Removes redundant link for CTA button */}
      {isLast && <Box>{children}</Box>}
    </>
  )
}

type LinksProps = {
  onClose?: () => void
}

const Links = ({ onClose }: LinksProps) => {
  const { colorMode } = useColorMode()
  return (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      spacing={4}
      align='stretch'>
      <DarkModeButton sx={{ display: { base: 'none', lg: 'initial' } }} />
      {HEADER_LINKS.map(({ href, title }, i) => (
        <Box
          key={i}
          d='flex'
          px={{ base: 0, lg: 4 }}
          fontSize={{ md: '1.35rem', base: '1.25rem' }}
          fontFamily='body'
          textShadow={`.25px .25px 0 ${
            colorMode === 'light' ? '#e5e5e5' : '#323232'
          }`}
          fontWeight='600'
          alignItems='center'
          justifyContent={{ base: 'flex-start', lg: 'center' }}
          h='40px'>
          <LinkItems
            href={href}
            onClick={onClose}
            {...{ isLast: i === HEADER_LINKS.length - 1 }}>
            {title}
          </LinkItems>
        </Box>
      ))}
    </Stack>
  )
}

const MenuDrawer = () => {
  const { colorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <Button
        bg={colorMode === 'light' ? 'white' : 'gray.800'}
        ref={btnRef}
        onClick={onOpen}>
        <IoIosMenu size='22px' />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent bg={colorMode === 'light' ? 'white' : 'gray.800'}>
          <DrawerCloseButton />

          <DrawerBody pt={10}>
            <DarkModeButton
              sx={{
                color: 'brand.dark',
                background: 'brand.primary',
              }}
            />
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
      <Box d={{ base: 'initial', lg: 'none' }} {...rest}>
        <MenuDrawer />
      </Box>
      <Box d={{ base: 'none', lg: 'initial' }} {...rest}>
        <Links />
      </Box>
    </>
  )
}
