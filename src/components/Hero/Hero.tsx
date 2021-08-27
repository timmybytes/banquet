import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { CTAButton } from '@components/CTAButton'

type HeroProps = {
  heading: string
  subheading: string
  image: string
  ctaLink: string
  ctaLabel: string
  smallText?: React.ReactNode
  children?: React.ReactNode
}

export const Hero = ({
  heading,
  subheading,
  image,
  ctaLink,
  ctaLabel,
  smallText,
  ...rest
}: HeroProps): React.ReactElement => {
  return (
    <Flex
      align='center'
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      direction={{ base: 'column-reverse', md: 'row' }}
      wrap='nowrap'
      minH='70vh'
      px={8}
      mb={16}
      mt={{ base: '3rem', md: '0' }}
      {...rest}>
      <Stack
        spacing={6}
        align={['start', 'center', 'flex-start', 'flex-start']}
        p={{ base: '0', md: '2rem' }}>
        <Heading
          as='h1'
          fontSize={{ base: '2rem', md: '3rem' }}
          fontWeight='700'
          textAlign={['left', 'center', 'left', 'left']}>
          {heading}
        </Heading>
        <Text
          as='h2'
          fontSize='lg'
          opacity='0.8'
          fontWeight='normal'
          lineHeight={1.5}
          textAlign={['left', 'center', 'left', 'left']}>
          {subheading}
        </Text>
        <CTAButton
          link={ctaLink}
          label={ctaLabel}
          color='brand.gold'
          bgColor='brand.dark'
        />
        <Text
          d={{ base: 'none', md: 'block' }}
          fontSize='xs'
          mt={2}
          textAlign='left'
          opacity='0.6'>
          {smallText}
        </Text>
      </Stack>
      <Box d={{ base: 'none', md: 'block' }} w={{ base: '100%' }} p={8}>
        <Image src={image} size='100%' rounded='1rem' shadow='2xl' />
      </Box>
    </Flex>
  )
}
