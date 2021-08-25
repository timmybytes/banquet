import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import {
  IoIceCreamOutline,
  IoLogoOctocat,
  IoRestaurantOutline,
} from 'react-icons/io5'

// Info for HTML <head/> tags, Hero component, and Open Graph link sharing
export const SITE_DATA = {
  title: 'Banquet',
  description: 'A gourmet Next.js boilerplate',
  author: 'Timothy Merritt',
  authorHandle: '@timmybytes', // For Twitter link cards
  authorHomepage: 'https://timmybytes.com',
  color: '#e9c46a',
  repo: 'https://github.com/timmybytes/banquet',
  url: 'banquet.netlify.app',
  img: 'banquet-card.png',
  logo: 'Icon-Dark.svg',
  hero: {
    heading: 'A Next.js boilerplate to satisfy your development cravings',
    subheading:
      'Banquet is fast, powerful, and full-flavored with default tools and configurations for building modern websites',
    image: 'images/cody-chan-GXhmQt6MFX8-unsplash.jpg',
    ctaLink: 'https://github.com/timmybytes/banquet',
    ctaLabel: 'Fork on GitHub',
    smallText: (
      <React.Fragment>
        Free and open-source under an MIT License. Photo by{' '}
        <a href='https://unsplash.com/@cceee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
          Cody Chan
        </a>{' '}
        on{' '}
        <a href='https://unsplash.com/s/photos/meal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
          Unsplash
        </a>
        .
      </React.Fragment>
    ),
  },
}

// Links for Header component with Ionicon icons
export const HEADER_LINKS = [
  {
    href: '#',
    title: (
      <>
        <IoRestaurantOutline size='22px' style={{ display: 'inline' }} /> Home
      </>
    ),
  },
  {
    href: '#features',
    title: (
      <>
        <IoIceCreamOutline size='22px' style={{ display: 'inline' }} /> Features
      </>
    ),
  },
  {
    href: 'https://github.com/timmybytes/banquet',
    title: (
      <Button
        size='sm'
        rounded='md'
        color='brand.gold'
        background='brand.dark'
        fontSize='inherit'
        _hover={{
          bg: 'brand.gold',
          color: 'brand.dark',
        }}>
        <IoLogoOctocat
          size='22px'
          style={{ display: 'inline', marginRight: '1ch' }}
        />{' '}
        Fork on GitHub
      </Button>
    ),
  },
]

//
export const FOOTER_DATA = (
  <>
    Made with 🧁 by{' '}
    {SITE_DATA.authorHomepage && SITE_DATA.author && (
      <>
        <Link href={SITE_DATA.authorHomepage}>
          <a>{SITE_DATA.author}</a>
        </Link>
      </>
    )}
  </>
)
