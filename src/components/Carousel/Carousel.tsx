// Based on Choc-UI's Carousel
import {
  Box,
  Flex,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoArrowBackCircle, IoArrowForwardCircle } from 'react-icons/io5'

interface CarouselProps {
  slides: {
    img: string
  }[]
}

export const Carousel = ({ slides }: CarouselProps): React.ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const slidesCount = slides.length

  const [slideModal, setSlideModal] = useState('')

  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = () => {
    setCurrentSlide(s => (s === 0 ? slidesCount - 1 : s - 1))
  }
  const nextSlide = () => {
    setCurrentSlide(s => (s === slidesCount - 1 ? 0 : s + 1))
  }
  const setSlide = slide => {
    setCurrentSlide(slide)
  }

  const arrowStyles = {
    cursor: 'pointer',
    top: '50%',
    w: 'auto',
    mt: '-22px',
    p: '8px',
    color: 'white',
    fontWeight: 'bold',
    transition: '0.3s ease',
    borderRadius: '50px',
    opacity: 0.6,
    _hover: {
      opacity: '1',
    },
  }

  const SlideControls = () => {
    return (
      <>
        <Text
          {...arrowStyles}
          position='absolute'
          left='0'
          pl={2}
          onClick={prevSlide}
        >
          <IoArrowBackCircle size='32px' />
        </Text>
        <Text
          {...arrowStyles}
          position='absolute'
          pr={2}
          right='0'
          onClick={nextSlide}
        >
          <IoArrowForwardCircle size='32px' />
        </Text>
      </>
    )
  }

  const DotControls = () => {
    return (
      <HStack justify='center' pos='absolute' bottom={4} w='full'>
        {Array.from({ length: slidesCount }).map((_, slide) => (
          <Box
            key={`dots-${slide}`}
            cursor='pointer'
            boxSize={['7px', '12px']}
            m='0 2px'
            bg={currentSlide === slide ? 'whiteAlpha.800' : 'whiteAlpha.500'}
            rounded='50%'
            display='inline-block'
            transition='background-color 0.3s ease'
            _hover={{ bg: 'blackAlpha.800' }}
            onClick={() => setSlide(slide)}
          ></Box>
        ))}
      </HStack>
    )
  }

  type SlideCountLabelProps = {
    id: number
  }
  const SlideCountLabel = ({ id }: SlideCountLabelProps) => {
    return (
      <Text
        color='white'
        fontSize='sm'
        fontWeight={800}
        p='8px 12px'
        pos='absolute'
        top='8px'
      >
        {id + 1} / {slidesCount}
      </Text>
    )
  }

  return (
    // Carousel Container
    <Flex
      w='full'
      shadow='xl'
      my={2}
      alignItems='center'
      justifyContent='center'
    >
      <Flex w='full' overflow='hidden' position='relative'>
        <Flex
          w='full'
          transition='all .4s'
          ml={`-${currentSlide * 100}%`}
          rounded='lg'
        >
          {/* Array of images from props */}
          {Array.isArray(slides) &&
            slides.map((slide, idx) => (
              <React.Fragment key={`slide-${idx}`}>
                <Box boxSize='full' flex='none' rounded='lg' onClick={onOpen}>
                  {/* Label indicator for more than 1 image */}
                  {slidesCount > 1 && <SlideCountLabel id={currentSlide} />}
                  <Image
                    src={'img' in slide ? slide['img'] : ''}
                    boxSize='full'
                    backgroundSize='cover'
                    rounded='lg'
                    cursor='pointer'
                    onClick={() => setSlideModal(slide['img'])}
                  />
                </Box>
                {/* Pop-up modal  */}
                <Modal
                  isOpen={isOpen}
                  onClose={onClose}
                  size='6xl'
                  motionPreset='slideInBottom'
                  isCentered
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalCloseButton rounded='full' />
                    <ModalBody p={6} transition='all .4s' bg='gray.800'>
                      {/* FIXME: Fix flash between modal image slides */}
                      {
                        // Arrow button and indicator labels for more than 1 image
                        slidesCount > 1 && (
                          <>
                            <SlideCountLabel id={currentSlide} />
                            <SlideControls />
                          </>
                        )
                      }
                      <Image
                        src={slides[currentSlide].img}
                        size='100%'
                        rounded='lg'
                        shadow='none'
                        width='100%'
                        height='auto'
                        transition='.3s ease'
                        onClick={onClose}
                      />
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </React.Fragment>
            ))}
        </Flex>

        {
          // Arrow button and dot controls for more than 1 image
          slidesCount > 1 && (
            <>
              <SlideControls />
              <DotControls />
            </>
          )
        }
      </Flex>
    </Flex>
  )
}
