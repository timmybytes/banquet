import { Box, Heading, Text } from '@chakra-ui/react'
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
      <Section>
        <Heading>
          About{' '}
          <Text
            as='span'
            fontStyle='italic'
            fontFamily='Playfair Display'
            fontWeight='900'>
            Main Course
          </Text>
        </Heading>
        <Box
          as='ul'
          d='flex'
          flexDir='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          p='1.5rem'>
          <Box as='li'>
            <Text>
              <strong>Feature</strong>
            </Text>
          </Box>
          <Box as='li'>
            <Text>
              <strong>Feature</strong>
            </Text>
          </Box>
          <Box as='li'>
            <Text>
              <strong>Feature</strong>
            </Text>
          </Box>
          <Box as='li'>
            <Text>
              <strong>Feature</strong>
            </Text>
          </Box>
        </Box>
        <Text as='p' m='1rem 0' maxW='65ch'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi incidunt
          minima laudantium quo et possimus natus non? Mollitia, suscipit in
          nobis dignissimos dolorem laborum illum iusto quia ducimus, ab
          deleniti?
        </Text>
      </Section>
    </>
  )
}
