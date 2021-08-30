import { CTAButton } from '@components/CTAButton'
import Link from 'next/link'
import React from 'react'

// Info for HTML <head/> tags, Hero component, and Open Graph link sharing
export const SITE_DATA = {
  title: 'Banquet',
  description: 'A gourmet Next.js boilerplate',
  author: 'Timothy Merritt',
  authorHandle: '@timmybytes', // For Twitter link cards
  authorHomepage: 'https://timmybytes.com',
  color: '#e9c46a',
  repo: 'https://github.com/timmybytes/banquet',
  url: 'banquet-starter.netlify.app',
  img: 'banquet-card.png',
  logo: 'Icon-Dark.svg',
  hero: {
    heading: 'A Next.js starter to satisfy your development cravings',
    subheading:
      'Banquet is configured for an excellent developer experience, and includes a feast of tooling and presets for building on the modern web.',
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
    title: 'Home',
  },
  {
    href: '#features',
    title: 'Features',
  },
  {
    href: 'https://github.com/timmybytes/banquet',
    title: (
      <CTAButton
        link={'https://github.com/timmybytes/banquet'}
        label='View on GitHub'
        color='brand.gold'
        bgColor='brand.dark'
      />
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
