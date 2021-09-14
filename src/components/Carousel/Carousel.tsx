import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import { ImageModal } from '@components/ImageModal'
import { useState } from 'react'
import { IoArrowBackCircle, IoArrowForwardCircle } from 'react-icons/io5'

// Based on Choc-UI's Carousel

interface CarouselProps {
  slides: {
    img: string
  }[]
  slidesCount?: number
}

export const Carousel = ({
  slides,
  // Fallback for undefined lengths
  slidesCount = 1,
}: CarouselProps): React.ReactElement => {
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

  return (
    <Flex
      w='full'
      shadow='xl'
      my={2}
      alignItems='center'
      // rounded='lg'
      justifyContent='center'>
      <Flex w='full' overflow='hidden' position='relative'>
        <Flex
          w='full'
          transition='all .4s'
          ml={`-${currentSlide * 100}%`}
          rounded='lg'>
          {Array.isArray(slides) &&
            slides.map((slide, idx) => (
              <Box key={`slide-${idx}`} boxSize='full' flex='none' rounded='lg'>
                {
                  // Only show '1/2', etc., label when multiple slides are present
                  slidesCount > 1 && (
                    <Text
                      color='white'
                      fontSize='sm'
                      fontWeight={800}
                      p='8px 12px'
                      pos='absolute'
                      top='8px'>
                      {idx + 1} / {slidesCount}
                    </Text>
                  )
                }
                {/* <Image
                  src={'img' in slide ? slide['img'] : ''}
                  boxSize='full'
                  backgroundSize='cover'
                  rounded='lg'
                /> */}
                <ImageModal image={'img' in slide ? slide['img'] : ''} />
              </Box>
            ))}
        </Flex>
        {
          // Only show Previous/Next controls when multiple slides are present
          slidesCount > 1 && (
            <>
              <Text
                {...arrowStyles}
                position='absolute'
                left='0'
                onClick={prevSlide}>
                <IoArrowBackCircle size='32px' />
              </Text>
              <Text
                {...arrowStyles}
                position='absolute'
                right='0'
                onClick={nextSlide}>
                <IoArrowForwardCircle size='32px' />
              </Text>
            </>
          )
        }
        <HStack justify='center' pos='absolute' bottom={4} w='full'>
          {
            // Only show dot controls when multiple slides are present
            slidesCount > 1 &&
              Array.from({ length: slidesCount }).map((_, slide) => (
                <Box
                  key={`dots-${slide}`}
                  cursor='pointer'
                  boxSize={['7px', '12px']}
                  m='0 2px'
                  bg={
                    currentSlide === slide ? 'whiteAlpha.800' : 'whiteAlpha.500'
                  }
                  rounded='50%'
                  display='inline-block'
                  transition='background-color 0.3s ease'
                  _hover={{ bg: 'blackAlpha.800' }}
                  onClick={() => setSlide(slide)}></Box>
              ))
          }
        </HStack>
      </Flex>
    </Flex>
  )
}
