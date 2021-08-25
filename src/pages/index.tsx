import { Box, Text } from '@chakra-ui/react'
import { CTAButton } from '@components/CTAButton'
import { Hero } from '@components/Hero'
import { Article } from '@components/Layout/Article'
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
        <Box
          p={{ base: '0', md: '2rem' }}
          w='100%'
          d='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'>
          <Text
            as='h2'
            my='1rem'
            fontFamily='heading'
            fontSize='2.5rem'
            maxW='30ch'
            fontWeight='900'>
            Features
          </Text>
          <hr />
          <Text
            alignSelf='center'
            m='1rem 0'
            maxW='85ch'
            fontSize='lg'
            opacity='0.8'
            fontWeight='normal'
            lineHeight={1.5}>
            Main Course is an opinionated starter and boilerplate for creating{' '}
            <a href='https://nextjs.org'>Next.js</a> projects, front-loading
            useful tools and configurations as defaults with minimal tinkering
            required.
          </Text>
        </Box>
        <Box
          display='grid'
          gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}>
          <Article
            heading='Modern DX with Typescript + Next.js'
            body='Main Course is built with Next.js to deliver fast performance,
              variable routing, static and/or server rendering, and more. All
              pages and components are written in Typescript, allowing for a
              more robust development experience.
            '
          />
          <Article
            heading='CSS Modules + SASS Support'
            body="Main Course supports both default SCSS/SASS and S/CSS modules,
              with no compiling or configuration needed. Use Chakra UI's inline
              styling shortcuts, create isolated CSS modules, or store and link
              your styles separately, all without any extra work."
          />
          <Article heading='Preconfigured Jest + React Testing Library'>
            Main Course is preconfigured with Jest and React Testing Library to
            allow for fast and isolated unit testing, and combines with Husky
            and <code>lint-staged</code> to ensure all tests pass on every
            commit. And when creating new components and pages with Plop (see
            below), Main Course will automatically generate a test file for you.
          </Article>
          <Article heading='Chakra UI & React Icons'>
            Main Course also includes{' '}
            <a href='https://chakra-ui.com'>Chakra UI</a> and{' '}
            <a href='https://github.com/react-icons/react-icons'>React Icons</a>{' '}
            for flexible, accessible, and easy to use UI components and hooks.
            And with Chakra’s theme provider, it’s easy to define default
            colors, sizes, fonts, etc., and access them from anywhere in your
            project.
          </Article>
          <Article heading='Plop.js Templates + Code Generator'>
            Main Course comes with a <code>bake</code> command to invoke a CLI
            code generator called <a href='https://plopjs.com'>Plop</a>. You can
            use it to add new components, tests, pages, etc., based on the
            included{' '}
            <a href='https://handlebarsjs.com/guide/'>
              <code>.hbs</code>
            </a>
            templates—or create ones yourself!
          </Article>
          <Article heading='Linting, Formatting, and Type-Checking with Husky'>
            Main course includes git hooks through{' '}
            <a href='https://github.com/typicode/husky'>Husky</a> to ensure all
            tests pass and all code is linted (with{' '}
            <a href='https://eslint.org/'>ESLint</a>) and formatted (with{' '}
            <a href='https://prettier.io/'>Prettier</a>) before you make a
            commit. Type checking is then performed before any commit is pushed.
            These options are more are easily customizable and can be adjusted
            to your own needs.
          </Article>
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
          <Text fontSize='2rem' fontFamily='heading'>
            Start building with
            <br />
            <Text
              as='span'
              color='brand.gold'
              textShadow='.25px .25px 0 #3c3c3c'>
              {SITE_DATA.title}
            </Text>
            <br /> today
          </Text>
          <CTAButton
            link={SITE_DATA.repo}
            label='View on GitHub'
            color='brand.dark'
            bgColor='brand.gold'
          />
        </Box>
      </Section>
    </>
  )
}
