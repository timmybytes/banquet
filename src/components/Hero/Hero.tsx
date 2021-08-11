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
import { IoLogoOctocat } from 'react-icons/io5'

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
        spacing={6}
        w={{ base: '80%', md: '60%' }}
        align={['start', 'center', 'flex-start', 'flex-start']}
        m='1rem'>
        <Heading
          as='h1'
          size='xl'
          fontWeight='bold'
          textAlign={['left', 'center', 'left', 'left']}>
          {title}
        </Heading>
        <Heading
          as='h2'
          size='md'
          opacity='0.8'
          fontWeight='normal'
          lineHeight={1.5}
          textAlign={['left', 'center', 'left', 'left']}>
          {subtitle}
        </Heading>
        <Link href={ctaLink}>
          <a>
            <Button
              backgroundColor='brand.dark'
              color='brand.gold'
              borderRadius='8px'
              py='4'
              px='4'
              lineHeight='1'
              size='md'
              _hover={{
                bg: 'brand.gold',
                color: 'brand.dark',
              }}>
              <IoLogoOctocat
                size='22px'
                style={{ display: 'inline', marginRight: '1ch' }}
              />{' '}
              {ctaLabel}
            </Button>
          </a>
        </Link>
        <Text
          fontSize='xs'
          mt={2}
          textAlign='left'
          color='brand.dark'
          opacity='0.6'>
          Free and open-source under an MIT License. Photo by{' '}
          <a href='https://unsplash.com/@cceee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
            Cody Chan
          </a>{' '}
          on{' '}
          <a href='https://unsplash.com/s/photos/meal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
            Unsplash
          </a>
          .
          <br />
          Made with 🧁 by{' '}
          <Link href='https://timmybytes.com'>
            <a>Timothy Merritt</a>
          </Link>
        </Text>
      </Stack>
      <Box w={{ base: '100%' }} mb={{ base: 12, md: 0 }}>
        <Image src={image} size='100%' rounded='1rem' shadow='2xl' />
      </Box>
    </Flex>
  )
}
