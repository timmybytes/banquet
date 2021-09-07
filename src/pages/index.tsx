import { Box, Text } from '@chakra-ui/react'
import { CTAButton } from '@components/CTAButton'
import { FeaturesSection } from '@components/FeaturesSection'
import { GettingStartedSection } from '@components/GettingStartedSection'
import { Hero } from '@components/Hero'
import { Section } from '@components/Layout/Section'
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
      <GettingStartedSection />
      <Section
        sx={{
          py: '2rem',
          d: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Box
          d='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          maxW='45ch'
          textAlign='center'
          sx={{ gap: '1rem' }}>
          <Text
            fontSize={{ base: '2rem', md: '3rem' }}
            fontWeight='700'
            fontFamily='heading'
            lineHeight='1.3'
            my={8}>
            Start building with
            <br />
            <Text
              as='span'
              color='brand.primary'
              textTransform='uppercase'
              fontWeight='200'
              textShadow='.25px .25px 0 #3c3c3c'>
              {SITE_DATA.title}
            </Text>
            <br /> today
          </Text>
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
