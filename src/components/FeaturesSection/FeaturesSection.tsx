import { Box, Grid, Text } from '@chakra-ui/react'
import { Carousel } from '@components/Carousel'
import { CodeBlock } from '@components/CodeBlock'
import { ImageModal } from '@components/ImageModal'
import { Article, Section } from '@components/Layout'
import React from 'react'

export const FeaturesSection = (): React.ReactElement => {
  const slides = [
    {
      img: 'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      img: 'https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      img: 'https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      img: 'https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      img: 'https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
  ]
  return (
    <Section
      sx={{
        d: 'flex',
        pt: '5rem',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        w: '100%',
      }}
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
          fontSize={{ base: '2rem', md: '3rem' }}
          maxW='30ch'
          fontWeight='200'
          textTransform='uppercase'
          color='brand.primary'
          textShadow='.25px .25px 0 #3c3c3c'>
          Features
        </Text>
      </Box>
      <Grid
        display='grid'
        gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
        justifyContent='center'
        alignItems='start'>
        <Article
          heading='Modern DX with Typescript + Next.js'
          body='Banquet is built with Next.js to deliver fast performance,
              variable routing, static and/or server rendering, and more. All
              pages and components are written in Typescript, allowing for a
              more robust development experience.
            '
        />
        <Article heading='Chakra UI & React Icons'>
          Banquet also includes <a href='https://chakra-ui.com'>Chakra UI</a>{' '}
          and{' '}
          <a href='https://github.com/react-icons/react-icons'>React Icons</a>{' '}
          for flexible, accessible, and easy to use UI components and hooks. And
          with Chakra’s theme provider, it’s easy to define default colors,
          sizes, fonts, etc., and access them from anywhere in your project.
        </Article>
        <Article
          heading='CSS Modules + SASS Support'
          body="Banquet supports both default SCSS/SASS and S/CSS modules,
              with no compiling or configuration needed. Use Chakra UI's inline
              styling shortcuts, create isolated CSS modules, or store and link
              your styles separately, all without any extra work."
        />
        <Article heading='Preconfigured Jest + React Testing Library'>
          Banquet is preconfigured with Jest and React Testing Library to allow
          for fast and isolated unit testing, and combines with Husky and{' '}
          <code>lint-staged</code> to ensure all tests pass on every commit. And
          when creating new components and pages with Plop (see below), Banquet
          will automatically generate a test file for you.
        </Article>
        <Article heading='Plop.js Templates + Code Generator'>
          Banquet comes with a <code>bake</code> command to invoke a CLI code
          generator called <a href='https://plopjs.com'>Plop</a>. You can use it
          to add new components, tests, pages, etc., based on the included{' '}
          <a href='https://handlebarsjs.com/guide/'>
            <code>.hbs</code>
          </a>{' '}
          templates—or create ones yourself!
        </Article>
        <Article heading='Linting, Formatting, and Type-Checking with Husky'>
          Banquet includes git hooks through{' '}
          <a href='https://github.com/typicode/husky'>Husky</a> to ensure all
          tests pass and all code is linted (with{' '}
          <a href='https://eslint.org/'>ESLint</a>) and formatted (with{' '}
          <a href='https://prettier.io/'>Prettier</a>) before you make a commit.
          Type checking is then performed before any commit is pushed. These
          options are more are easily customizable and can be adjusted to your
          own needs.
        </Article>
        {/* FIXME: Integrate with above sections */}
        <Article
          heading='Fast Setup'
          body='Getting started with Banquet is easy: just clone the code and
              install dependencies. Use the site (the one you’re currently
              reading!) as a template, or delete the pre-made content and create
              your own from scratch. Useful presets are already in place for
              code creation, linting/formatting, testing, and customizing the
              theme to your tastes.'>
          <CodeBlock>
            git clone https://github.com/timmybytes/banquet.git
            <br />
            cd banquet
            <br />
            yarn
            <Text as='span' color='gray.400'>
              {' '}
              # or npm install
            </Text>
          </CodeBlock>
        </Article>
        <Article heading='Easy Customization'>
          <Text>
            You can use the <code>SiteData</code> file to easily pass your own
            metadata down to the rest of the site, update site name and
            description, add Open Graph link previews, and add your own header
            links, among other data.
          </Text>
          <ImageModal
            header='SiteData'
            body='Update metadata site-wide by editing the SiteData (src/data/SiteData.tsx) file'
            image='/assets/images/header.webp'
          />
        </Article>
        <Article heading='Build New Components and Pages in Seconds'>
          <Text>
            Use{' '}
            <a href='https://www.plopjs.com'>
              <code>Plop.js</code>
            </a>{' '}
            to create new code from premade templates, with related tests,
            styles, and exports. See examples below.
          </Text>
          <Carousel
            slides={[
              { img: '/assets/images/bake1.webp' },
              { img: '/assets/images/bake2.webp' },
              { img: '/assets/images/bake3.webp' },
            ]}
          />
          {/* <ImageModal
            header='SiteData'
            body='Update metadata site-wide by editing the SiteData (src/data/SiteData.tsx) file'
            image='/assets/images/bake1.webp'
          />
          <ImageModal
            header='SiteData'
            body='Update metadata site-wide by editing the SiteData (src/data/SiteData.tsx) file'
            image='/assets/images/bake2.webp'
          />
          <ImageModal
            header='SiteData'
            body='Update metadata site-wide by editing the SiteData (src/data/SiteData.tsx) file'
            image='/assets/images/bake3.webp'
          /> */}
        </Article>
        <Article heading='Automate Your Code Checks'>
          <Text>
            Banquet comes with{' '}
            <a
              href='https://typicode.github.io/husky/#/'
              rel='noopener noreferrer'
              target='_blank'>
              Husky
            </a>{' '}
            built-in. Husky makes configuring Git Hooks easy, and allows you to
            automate scripts or processes before you commit, push, etc. By
            default, Banquet's hooks are:
          </Text>
          <Box as='ul' p={4}>
            <Text as='li' my={4}>
              <Text as='span' fontWeight='700'>
                Pre-Commit:
              </Text>{' '}
              Runs ESLint, Prettier, and any tests related to files that are
              staged, based on configurations at the root of the project.
            </Text>
            <Text as='li' my={4}>
              <Text as='span' fontWeight='700'>
                Pre-Push:
              </Text>{' '}
              Runs type-checking for all relevant TypeScript files, based on
              configurations at the root of the project.
            </Text>
          </Box>
          <Text>
            These automated checks will help catch errors and warnings before
            your code leaves your machine, and add a consistent framework for
            larger teams to work from.
          </Text>
          <Carousel slides={slides} />
        </Article>
      </Grid>
    </Section>
  )
}
