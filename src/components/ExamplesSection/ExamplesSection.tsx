import { Box, Grid, Image, Stack, Text } from '@chakra-ui/react'
import { ImageModal } from '@components/ImageModal'
import { Article, Section } from '@components/Layout'
import React from 'react'

type ExamplesSectionProps = {
  children?: React.ReactNode
}

export const ExamplesSection = ({
  children,
  ...rest
}: ExamplesSectionProps): React.ReactElement => {
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
        gridTemplateColumns={{ base: '1fr', md: 'auto auto' }}
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
            <ImageModal
              header='Getting Started'
              image='/assets/images/clone.png'
            />
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
              image='/assets/images/header.png'
            />
          </Article>
        </Stack>
        <Stack>
          <Article heading='Fast setup & easy configuration.'>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
              iste autem? Nisi natus laborum, nam pariatur in numquam voluptates
              quas possimus, soluta doloremque, culpa quia saepe ut. Ab, ducimus
              neque.
            </Text>
          </Article>
          <Image
            size='100%'
            objectFit='cover'
            rounded='1rem'
            shadow='2xl'
            src='https://source.unsplash.com/random/600x400'
          />
        </Stack>
        <Stack>
          <Article heading='Fast setup & easy configuration.'>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
              iste autem? Nisi natus laborum, nam pariatur in numquam voluptates
              quas possimus, soluta doloremque, culpa quia saepe ut. Ab, ducimus
              neque.
            </Text>
          </Article>
          <Image
            size='100%'
            objectFit='cover'
            rounded='1rem'
            shadow='2xl'
            src='https://source.unsplash.com/random/600x400'
          />
        </Stack>
      </Grid>
      {children}
    </Section>
  )
}
