import { Box, Text } from '@chakra-ui/react'
import { CTAButton } from '@components/CTAButton'
import { FeaturesSection } from '@components/FeaturesSection'
import { Hero } from '@components/Hero'
import { Section } from '@components/Layout/Section'
import { SITE_DATA } from '@data/SiteData'
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
      <FeaturesSection />
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
            fontSize={{ base: '2rem', md: '3rem' }}
            fontWeight='700'
            fontFamily='heading'
            lineHeight='1.3'
            my={8}>
            Start building with
            <br />
            <Text
              as='span'
              color='brand.gold'
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
            color='brand.gold'
            bgColor='brand.dark'
          />
        </Box>
      </Section>
    </>
  )
}
