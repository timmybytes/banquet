import { Hero } from '@components/Hero'
import { Layout } from '@components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function Home(): React.ReactNode {
  const smallText = (
    <>
      Free and open-source under an MIT License. Photo by{' '}
      <a href='https://unsplash.com/@cceee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
        Cody Chan
      </a>{' '}
      on{' '}
      <a href='https://unsplash.com/s/photos/meal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
        Unsplash
      </a>
      .
      <br />
      Made with 🧁 by{' '}
      <Link href='https://timmybytes.com'>
        <a>Timothy Merritt</a>
      </Link>
    </>
  )
  return (
    <>
      <Head>
        <title>Main Course</title>
        <meta name='description' content='A hearty Next.js template' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Hero
          title='A Next.js boilerplate to satisfy your development cravings'
          subtitle='Main Course is fast, powerful, and full-flavored with default tools and configurations for building modern websites.'
          image='images/cody-chan-GXhmQt6MFX8-unsplash.jpg'
          ctaLink='https://github.com/timmybytes/main-course'
          ctaLabel='Fork on GitHub'
          smallText={smallText}
        />
      </Layout>
    </>
  )
}
