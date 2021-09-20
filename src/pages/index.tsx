import { Box, Text } from '@chakra-ui/react'
import { CodeBlock } from '@components/CodeBlock'
import { CTAButton } from '@components/CTAButton'
import { FeaturesSection } from '@components/FeaturesSection'
import { Hero } from '@components/Hero'
import { Article, Section } from '@components/Layout'
import { HERO_DATA, SITE_DATA } from '@data/SiteData'
import React from 'react'

export default function Home(): React.ReactNode {
  return (
    <>
      <Hero
        heading={HERO_DATA.heading}
        subheading={HERO_DATA.subheading}
        image={HERO_DATA.image}
        ctaLink={HERO_DATA.ctaLink}
        ctaLabel={HERO_DATA.ctaLabel}
        smallText={HERO_DATA.smallText}
      />
      <FeaturesSection />
      <Section
        sx={{
          pt: '5rem',
          d: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          d='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          sx={{ gap: '1rem' }}
        >
          <Text
            px={{ base: '', md: '1rem' }}
            as='h3'
            w='100%'
            fontSize={{ base: '2.5rem', md: '3rem' }}
            fontWeight='700'
            fontFamily='heading'
            lineHeight='1.3'
          >
            Start building with
            <Text
              as='span'
              color='brand.primary'
              textTransform='uppercase'
              fontWeight='200'
              textShadow='.25px .25px 0 #3c3c3c'
            >
              {' '}
              {SITE_DATA.title}{' '}
            </Text>
          </Text>
          <Article>
            <Text mb={6}>
              Getting started with Banquet is easy: just clone the code and
              install dependencies.
            </Text>
            <Text mb={6}>
              Use the site (the one you’re currently reading!) as a template, or
              delete the pre-made content and create your own from scratch.
              Useful presets are already in place for code creation,
              linting/formatting, testing, and customizing the theme to your
              tastes.
            </Text>
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
          <CTAButton
            link={SITE_DATA.repo}
            label='View on GitHub'
            color='brand.primary'
            bgColor='brand.dark'
          />
        </Box>
      </Section>
    </>
  )
}
