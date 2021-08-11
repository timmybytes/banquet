import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'

type HeroProps = {
  title: string
  subtitle: string
  image: string
  ctaLink: string
  ctaLabel: string
  children?: React.ReactNode
}

export const Hero = ({
  title,
  subtitle,
  image,
  ctaLink,
  ctaLabel,
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
      {...rest}>
      <Stack
        spacing={4}
        w={{ base: '80%', md: '40%' }}
        align={['start', 'center', 'flex-start', 'flex-start']}>
        <Heading
          as='h1'
          size='xl'
          fontWeight='bold'
          color='primary.800'
          textAlign={['left', 'center', 'left', 'left']}>
          {title}
        </Heading>
        <Heading
          as='h2'
          size='md'
          color='primary.800'
          opacity='0.8'
          fontWeight='normal'
          lineHeight={1.5}
          textAlign={['left', 'center', 'left', 'left']}>
          {subtitle}
        </Heading>
        <Link href={ctaLink}>
          <a>
            <Button
              background='brand.dark'
              color='brand.gold'
              borderRadius='8px'
              py='4'
              px='4'
              lineHeight='1'
              size='md'>
              {ctaLabel}
            </Button>
          </a>
        </Link>
        <Text
          fontSize='xs'
          mt={2}
          textAlign='left'
          color='primary.800'
          opacity='0.6'>
          Free and open-source under an MIT License. Made with 🧁 by{' '}
          <Link href='https://timmybytes.com'>
            <a>Timothy Merritt</a>
          </Link>
        </Text>
      </Stack>
      <Box w={{ base: '80%', sm: '60%', md: '50%' }} mb={{ base: 12, md: 0 }}>
        <Image src={image} size='100%' rounded='1rem' shadow='2xl' />
      </Box>
    </Flex>
  )
}
