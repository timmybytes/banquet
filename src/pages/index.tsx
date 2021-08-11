import { Hero } from '@components/Hero'
import { Layout } from '@components/Layout'
import Head from 'next/head'
import React from 'react'

export default function Home(): React.ReactNode {
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
          image='https://source.unsplash.com/collection/404339/800x600'
          ctaLink='https://github.com/timmybytes/main-course'
          ctaLabel='Fork on GitHub'
        />
      </Layout>
    </>
  )
}
