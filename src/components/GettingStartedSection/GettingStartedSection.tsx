import { Box, Grid, Stack, Text } from '@chakra-ui/react'
import { CodeBlock } from '@components/CodeBlock'
import { ImageModal } from '@components/ImageModal'
import { Article, Section } from '@components/Layout'
import React from 'react'

type GettingStartedSectionProps = {
  children?: React.ReactNode
}

export const GettingStartedSection = ({
  children,
  ...rest
}: GettingStartedSectionProps): React.ReactElement => {
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
      id='getting-started'
      {...rest}>
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
          Getting Started
        </Text>
      </Box>
      <Grid
        gridTemplateColumns={{
          base: '1fr',
          md: '1fr 1fr ',
        }}
        gridGap={10}
        justifyItems='stretch'
        justifyContent='center'
        alignItems='flex-start'>
        <Stack direction={{ base: 'column', md: 'row' }}>
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
        </Stack>
        <Stack>
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
        </Stack>
        <Stack>
          <Article heading='Build New Components and Pages in Seconds'>
            <Text>
              Use{' '}
              <a href='https://www.plopjs.com'>
                <code>Plop.js</code>
              </a>{' '}
              to create new code from premade templates, with related tests,
              styles, and exports. See examples below.
            </Text>
            <ImageModal
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
            />
          </Article>
        </Stack>
        <Stack>
          <Article heading='Automate Your Code Checks'>
            <Text>
              Banquet comes with{' '}
              <a
                href='https://typicode.github.io/husky/#/'
                rel='noopener noreferrer'
                target='_blank'>
                Husky
              </a>{' '}
              built-in. Husky makes configuring Git Hooks easy, and allows you
              to automate scripts or processes before you commit, push, etc. By
              default, Banquet's hooks are:
            </Text>
            <Box as='ul'>
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
        </Stack>
      </Grid>
      {children}
    </Section>
  )
}
