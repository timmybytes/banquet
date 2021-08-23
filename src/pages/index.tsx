import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import { Hero } from '@components/Hero'
import { Section } from '@components/Layout/Section'
import { SITE_DATA } from '@components/Meta'
import React from 'react'

export default function Home(): React.ReactNode {
  return (
    <>
      <Hero
        heading={SITE_DATA.hero.heading}
        subheading={SITE_DATA.hero.subheading}
        image={SITE_DATA.hero.image}
        ctaLink={SITE_DATA.hero.ctaLink}
        ctaLabel={SITE_DATA.hero.ctaLabel}
        smallText={SITE_DATA.hero.smallText}
      />
      <Section
        display='flex'
        flexWrap='wrap'
        justifyContent='space-between'
        alignItems='center'
        flexDirection={{ base: 'column', md: 'row' }}>
        <Box maxW={{ base: '100%', md: '50%' }} p={{ base: '0' }}>
          <Image
            src='/images/visual-stories-micheile-eF4421ZnFWU-unsplash@1000.jpg'
            size='100%'
            rounded='1rem'
            shadow='2xl'
          />
        </Box>
        <Box maxW={{ base: '100%', md: '50%' }} p={{ base: '0' }}>
          <Box p={{ base: '0', md: '2rem' }}>
            <Heading my='1rem'>Features</Heading>
            <Text as='p' m='1rem 0' maxW='65ch'>
              Main Course is an opinionated boilerplate for creating{' '}
              <a href='https://nextjs.org'>Next.js</a> projects. There are{' '}
              <em>many</em> great starter templates out there for settings up a
              web development project, but there always seems to be a few things
              useful defaults missing from most of them. Main Course aims to
              solve this by front-loading more tools and configurations as
              defaults with less tinkering required.
            </Text>
            <Text>It's configured with the following out of the box:</Text>
            <Box
              as='ul'
              d='flex'
              flexDirection='column'
              listStyleType='none'
              p='1.5rem'>
              <Box as='li' p='.5rem'>
                Modern React DX: <a href='https://nextjs.org'>Next.js</a> +{' '}
                <a href=''>Typescript</a>
              </Box>
              <Box as='li' p='.5rem'>
                Flexible Styling: Support for <a href=''>CSS Modules</a>,{' '}
                <a href=''>SASS</a>, and/or CSS-in-JS
              </Box>
              <Box as='li' p='.5rem'>
                Testing defaults: <a href=''>Jest</a> +{' '}
                <a href=''>React Testing Library</a>
              </Box>
              <Box as='li' p='.5rem'>
                Robust UI: <a href=''>Chakra UI</a> + <a href=''>React Icons</a>
              </Box>
              <Box as='li' p='.5rem'>
                Automated Component & page generation: <a href=''>Plop.js</a>
              </Box>
              <Box as='li' p='.5rem'>
                CI/CD: <a href=''>Husky</a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Section>
      <Section
        p='2rem'
        d='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'>
        <Box>
          <Text as='h3' my='1rem' fontSize='2rem' maxW='30ch' fontWeight='900'>
            Configured for modern React development with Typescript + Next.js
          </Text>
          <Text as='p' m='1rem 0' maxW='65ch'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            incidunt minima laudantium quo et possimus natus non? Mollitia,
            suscipit in nobis dignissimos dolorem laborum illum iusto quia
            ducimus, ab deleniti?
          </Text>
        </Box>
        <Box>
          <Text as='h3' my='1rem' fontSize='2rem' maxW='30ch' fontWeight='900'>
            Support for CSS Modules + SASS
          </Text>
          <Text as='p' m='1rem 0' maxW='65ch'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            incidunt minima laudantium quo et possimus natus non? Mollitia,
            suscipit in nobis dignissimos dolorem laborum illum iusto quia
            ducimus, ab deleniti?
          </Text>
        </Box>
        <Box>
          <Text as='h3' my='1rem' fontSize='2rem' maxW='30ch' fontWeight='900'>
            Jest + React Testing Library preconfigured
          </Text>
          <Text as='p' m='1rem 0' maxW='65ch'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            incidunt minima laudantium quo et possimus natus non? Mollitia,
            suscipit in nobis dignissimos dolorem laborum illum iusto quia
            ducimus, ab deleniti?
          </Text>
        </Box>
        <Box>
          <Text as='h3' my='1rem' fontSize='2rem' maxW='30ch' fontWeight='900'>
            Chakra UI
          </Text>
          <Text as='p' m='1rem 0' maxW='65ch'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            incidunt minima laudantium quo et possimus natus non? Mollitia,
            suscipit in nobis dignissimos dolorem laborum illum iusto quia
            ducimus, ab deleniti?
          </Text>
        </Box>
        <Box>
          <Text as='h3' my='1rem' fontSize='2rem' maxW='30ch' fontWeight='900'>
            Plop.js Templates + Code Generator
          </Text>
          <Text as='p' m='1rem 0' maxW='65ch'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            incidunt minima laudantium quo et possimus natus non? Mollitia,
            suscipit in nobis dignissimos dolorem laborum illum iusto quia
            ducimus, ab deleniti?
          </Text>
        </Box>
        <Box>
          <Text as='h3' my='1rem' fontSize='2rem' maxW='30ch' fontWeight='900'>
            Continuous Integration with Husky
          </Text>
          <Text as='p' m='1rem 0' maxW='65ch'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            incidunt minima laudantium quo et possimus natus non? Mollitia,
            suscipit in nobis dignissimos dolorem laborum illum iusto quia
            ducimus, ab deleniti?
          </Text>
        </Box>
      </Section>
      <Section
        p='2rem'
        d='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'>
        <Box
          d='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          maxW='45ch'
          textAlign='center'
          sx={{ gap: '1rem' }}>
          <Text
            fontSize='2rem'
            fontFamily='Playfair Display'
            fontStyle='italic'
            fontWeight='900'>
            Starting building with
            <br />
            Main Course today
          </Text>
          <Button
            color='brand.dark'
            bg='brand.gold'
            _hover={{ color: 'brand.gold', bg: 'brand.dark' }}>
            View on GitHub
          </Button>
        </Box>
      </Section>
    </>
  )
}
