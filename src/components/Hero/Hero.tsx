import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { CTAButton } from '@components/CTAButton'
import { FC } from 'react'

type HeroProps = {
  heading: string
  subheading: string
  image: string
  ctaLink: string
  ctaLabel: string
  smallText?: React.ReactNode
  children?: React.ReactNode
}

export const Hero: FC<HeroProps> = ({
  heading,
  subheading,
  image,
  ctaLink,
  ctaLabel,
  smallText,
  ...rest
}) => {
  return (
    <Flex
      align='center'
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      direction={{ base: 'column', lg: 'row-reverse' }}
      minH='70vh'
      px={8}
      mb={16}
      mt={{ base: '3rem', md: '0' }}
      {...rest}
    >
      <Box
        flexBasis='50%'
        d={{ base: 'block' }}
        p={{ base: '1rem 0', md: 8 }}
        w='100%'
        minW='200px'
        alignSelf={{ base: 'center' }}
      >
        <Image src={image} rounded='1rem' shadow='lg' />
      </Box>
      <Stack
        spacing={6}
        align='flex-start'
        p={{ base: '0', md: '2rem' }}
        flexBasis='50%'
      >
        <Heading
          as='h1'
          fontSize={{ base: '2rem', md: 'calc(1.5rem + 1.2vw)' }}
          fontWeight='700'
        >
          {heading}
        </Heading>
        <Text
          as='h2'
          fontSize='lg'
          opacity='0.8'
          fontWeight='normal'
          lineHeight={1.5}
          maxW='55ch'
        >
          {subheading}
        </Text>
        <CTAButton
          link={ctaLink}
          label={ctaLabel}
          color='brand.primary'
          bgColor='brand.dark'
        />
        <Text
          d={{ base: 'none', md: 'block' }}
          fontSize='xs'
          mt={2}
          textAlign='left'
          opacity='0.6'
        >
          {smallText}
        </Text>
      </Stack>
    </Flex>
  )
}
