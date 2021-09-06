import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { IoSearch } from 'react-icons/io5'

type ImageModalProps = {
  children?: React.ReactNode
  image?: React.ReactNode
}

export const ImageModal = ({
  children,
  image,
  ...rest
}: ImageModalProps): React.ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box onClick={onOpen} my={4} cursor='pointer'>
        {image}
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
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton rounded='full' />
          <ModalBody
            bg='rgba(0,0,0,.1)'
            p={6}
            d='flex'
            justifyContent='center'
            alignItems='center'
            onClick={onClose}>
            {image}
          </ModalBody>
        </ModalContent>
      </Modal>
      {children}
    </>
  )
}
