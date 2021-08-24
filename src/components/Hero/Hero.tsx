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
      minH='50vh'
      px={8}
      mb={16}
      {...rest}>
      <Stack
        spacing={6}
        w={{ base: '80%', md: '60%' }}
        align={['start', 'center', 'flex-start', 'flex-start']}
        m='1rem'>
        <Heading
          as='h1'
          size='xl'
          fontWeight='bold'
          textAlign={['left', 'center', 'left', 'left']}>
          {heading}
        </Heading>
        <Heading
          as='h2'
          size='md'
          opacity='0.8'
          fontWeight='normal'
          lineHeight={1.5}
          textAlign={['left', 'center', 'left', 'left']}>
          {subheading}
        </Heading>
        <CTAButton
          link={ctaLink}
          label={ctaLabel}
          color='brand.gold'
          bgColor='brand.dark'
        />
        <Text
          fontSize='xs'
          mt={2}
          textAlign='left'
          color='brand.dark'
          opacity='0.6'>
          {smallText}
        </Text>
      </Stack>
      <Box w={{ base: '100%' }} mb={{ base: 12, md: 0 }}>
        <Image src={image} size='100%' rounded='1rem' shadow='2xl' />
      </Box>
    </Flex>
  )
}
