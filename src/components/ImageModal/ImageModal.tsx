import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SlideFade,
  Text,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'
import { IoSearch } from 'react-icons/io5'

type ImageModalProps = {
  children?: React.ReactNode
  image: string
  header?: string
  body?: string
  footer?: string
}

export const ImageModal = ({
  children,
  image,
  header,
  body,
  footer,
  ...rest
}: ImageModalProps): React.ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode } = useColorMode()
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Box>
      <Box
        onClick={onOpen}
        my={4}
        cursor='pointer'
        position='relative'
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          // On hover, darken image in light mode and brighten in dark mode
          filter={isHovered ? 'brightness(.5)' : 'none'}
          fit='cover'
          src={image}
          width='100%'
          rounded='lg'
          shadow='2xl'
          transition='.3s'
          {...rest}
        />
        <SlideFade in={isHovered}>
          <Box
            d='flex'
            alignItems='flex-start'
            justifyContent='flex-end'
            pt={2}
            position='absolute'
            bottom={2}
            right='0'
            color='white'
          >
            <IoSearch />
            <Text
              color='white'
              as='span'
              fontSize='sm'
              pr={2}
              pl={1}
              textAlign='right'
            >
              Click to Enlarge
            </Text>
          </Box>
        </SlideFade>
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size='6xl'
        motionPreset='slideInBottom'
        isCentered
      >
        <ModalOverlay />
        <ModalContent bg={colorMode === 'light' ? 'white' : 'gray.800'}>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton
            rounded='full'
            color={colorMode === 'light' ? 'black' : 'white'}
          />
          <ModalBody p={6} onClick={onClose}>
            <Image
              src={image}
              rounded='lg'
              shadow='none'
              width='100%'
              height='auto'
            />
            <Text my={4}>{body}</Text>
          </ModalBody>
          <ModalFooter>{footer}</ModalFooter>
        </ModalContent>
      </Modal>
      {children}
    </Box>
  )
}
