import { Box, Button, Text } from '@chakra-ui/react'
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
        p='2rem'
        d='flex'
        pt='5rem'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        w='100%'
        id='features'>
        <Box p={{ base: '0', md: '2rem' }}>
          <Text
            as='h2'
            my='1rem'
            fontSize='2.5rem'
            maxW='30ch'
            fontWeight='900'
            textAlign='center'>
            Features
          </Text>
          <hr />
          <Text
            m='1rem 0'
            maxW='65ch'
            fontSize='xl'
            opacity='0.8'
            fontWeight='normal'
            lineHeight={1.5}>
            Main Course is an opinionated starter and boilerplate for creating{' '}
            <a href='https://nextjs.org'>Next.js</a> projects, front-loading
            useful tools and configurations as defaults with minimal tinkering
            required.
          </Text>
        </Box>
        <Box p={{ base: '0', md: '2rem' }}>
          <Text as='h3' my='1rem' fontSize='2rem' maxW='30ch' fontWeight='900'>
            Configured for modern React development with Typescript + Next.js
          </Text>
          <Text
            m='1rem 0'
            maxW='65ch'
            fontSize='xl'
            opacity='0.8'
            fontWeight='normal'
            lineHeight={1.5}>
            Main Course is built with Next.js to deliver fast performance,
            variable routing, static and/or server rendering, and more. All
            pages and components are written in Typescript, allowing for a more
            robust development experience.
          </Text>
        </Box>
        <Box p={{ base: '0', md: '2rem' }}>
          <Text as='h3' my='1rem' fontSize='2rem' maxW='30ch' fontWeight='900'>
            Support for CSS Modules + SASS
          </Text>
          <Text
            m='1rem 0'
            maxW='65ch'
            fontSize='xl'
            opacity='0.8'
            fontWeight='normal'
            lineHeight={1.5}>
            Main Course supports both default SCSS/SASS and S/CSS modules, with
            no compiling or configuration needed. Use Chakra UI's inline styling
            shortcuts, create isolated CSS modules, or store and link your
            styles separately, all without any extra work.
          </Text>
        </Box>
        <Box p={{ base: '0', md: '2rem' }}>
          <Text as='h3' my='1rem' fontSize='2rem' maxW='30ch' fontWeight='900'>
            Jest + React Testing Library preconfigured
          </Text>
          <Text
            m='1rem 0'
            maxW='65ch'
            fontSize='xl'
            opacity='0.8'
            fontWeight='normal'
            lineHeight={1.5}>
            Main Course is preconfigured with Jest and React Testing Library to
            allow for fast and isolated unit testing, and combines with Husky
            and <code>lint-staged</code> to ensure all tests pass on every
            commit. And when creating new components and pages with Plop (see
            below), Main Course will automatically generate a test file for you.
          </Text>
        </Box>
        <Box p={{ base: '0', md: '2rem' }}>
          <Text as='h3' my='1rem' fontSize='2rem' maxW='30ch' fontWeight='900'>
            Chakra UI & React Icons
          </Text>
          <Text
            m='1rem 0'
            maxW='65ch'
            fontSize='xl'
            opacity='0.8'
            fontWeight='normal'
            lineHeight={1.5}>
            Main Course also includes{' '}
            <a href='https://chakra-ui.com'>Chakra UI</a> and{' '}
            <a href='https://github.com/react-icons/react-icons'>React Icons</a>{' '}
            for flexible, accessible, and easy to use UI components and hooks.
            And with Chakra’s theme provider, it’s easy to define default
            colors, sizes, fonts, etc., and access them from anywhere in your
            project.
          </Text>
        </Box>
        <Box p={{ base: '0', md: '2rem' }}>
          <Text as='h3' my='1rem' fontSize='2rem' maxW='30ch' fontWeight='900'>
            Plop.js Templates + Code Generator
          </Text>
          <Text
            m='1rem 0'
            maxW='65ch'
            fontSize='xl'
            opacity='0.8'
            fontWeight='normal'
            lineHeight={1.5}>
            Main Course comes with a `bake` command to invoke a CLI code
            generator called <a href='https://plopjs.com'>Plop</a>. You can use
            it to add new components, tests, pages, etc., based on the included{' '}
            <a href='https://handlebarsjs.com/guide/'>
              <code>.hbs</code>
            </a>
            templates—or create ones yourself!
          </Text>
        </Box>
        <Box p={{ base: '0', md: '2rem' }}>
          <Text as='h3' my='1rem' fontSize='2rem' maxW='30ch' fontWeight='900'>
            Continuous Integration with Husky
          </Text>
          <Text
            m='1rem 0'
            maxW='65ch'
            fontSize='xl'
            opacity='0.8'
            fontWeight='normal'
            lineHeight={1.5}>
            Main course includes git hooks through Husky to ensure all tests
            pass and all code is linted and formatted before you make a commit.
            Type checking is then performed before any commit is pushed. These
            options are more are easily customizable and can be adjusted to your
            own needs.
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
            Start building with
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
