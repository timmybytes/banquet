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
  Text,
  useDisclosure,
} from '@chakra-ui/react'
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
  return (
    <Box {...rest}>
      <Box onClick={onOpen} my={4} cursor='pointer'>
        <Image src={image} size='100%' rounded='1rem' shadow='2xl' />
        <Box d='flex' alignItems='flex-start' justifyContent='flex-end' pt={2}>
          <IoSearch />
          <Text as='span' fontSize='xs' color='black' pr={2} textAlign='right'>
            Click to Enlarge
          </Text>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size='6xl' isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton rounded='full' />
          <ModalBody p={6} onClick={onClose}>
            <Image src={image} size='100%' rounded='1rem' shadow='2xl' />
            <Text my={4}>{body}</Text>
          </ModalBody>
          <ModalFooter>{footer}</ModalFooter>
        </ModalContent>
      </Modal>
      {children}
    </Box>
  )
}
