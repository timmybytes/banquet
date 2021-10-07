import { Box, Grid, Heading, Text } from '@chakra-ui/react'
import { Carousel } from '@components/Carousel'
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
      id='features'
    >
      <Box
        p={{ base: '0', md: '2rem' }}
        w='100%'
        d='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        <Text
          as='h2'
          my='1rem'
          fontFamily='heading'
          fontSize={{ base: '2rem', md: '3rem' }}
          maxW='30ch'
          fontWeight='200'
          textTransform='uppercase'
          color='brand.primary'
          textShadow='.25px .25px 0 #3c3c3c'
        >
          Features
        </Text>
      </Box>
      <Grid
        display='grid'
        gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
        gridGap={10}
        justifyContent='center'
        alignItems='start'
      >
        <Article
          heading='Modern DX with Typescript, Next.js, Chakra UI & React Icons'
          body='Banquet is built with Next.js to deliver fast performance,
              variable routing, static and/or server rendering, and more. All
              pages and components are written in Typescript, allowing for a
              more robust development experience.
            '
        >
          <Text>
            Banquet also includes <a href='https://chakra-ui.com'>Chakra UI</a>{' '}
            and{' '}
            <a href='https://github.com/react-icons/react-icons'>React Icons</a>{' '}
            for flexible, accessible, and easy to use UI components and hooks.
            And with Chakra’s theme provider, it’s easy to define default
            colors, sizes, fonts, etc., and access them from anywhere in your
            project.
          </Text>
        </Article>
        <Article heading='Customized Components'>
          <Text>
            Banquet also adds custom components like an Image Modal and Carousel
            not available in the core Chakra library. See examples below, and
            click on the images to trigger the modals.
          </Text>
          <Grid gridTemplateColumns='1fr 1fr' gridGap='3rem'>
            <Box>
              <Heading as='h3' pt={6} fontSize='2xl' textAlign='center'>
                Image Modal
              </Heading>
              <ImageModal image='/assets/images/cody-chan-GXhmQt6MFX8-unsplash.jpg' />
            </Box>
            <Box>
              <Heading as='h3' pt={6} fontSize='2xl' textAlign='center'>
                Carousel
              </Heading>
              <Carousel slides={slides} />
            </Box>
          </Grid>
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
          templates—or create ones yourself! See examples below.
          <Carousel
            slides={[
              { img: '/assets/images/bake1.webp' },
              { img: '/assets/images/bake2.webp' },
              { img: '/assets/images/bake3.webp' },
            ]}
          />
        </Article>
        <Article heading='Linting, Formatting, and Type-Checking: Automated Code Checks with Husky'>
          <Text>
            Banquet comes with{' '}
            <a
              href='https://typicode.github.io/husky/#/'
              rel='noopener noreferrer'
              target='_blank'
            >
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
        </Article>
      </Grid>
    </Section>
  )
}
