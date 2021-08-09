import styles from '@/styles/Home.module.scss'
import Head from 'next/head'
import React from 'react'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Main Course</title>
        <meta name='description' content='A hearty Next.js template' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div
        className={styles.root}
        style={{
          padding: '2rem',
          height: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <div
          style={{
            borderRadius: '8px',
            boxShadow: '4px 4px 15px 0 rgba(0,0,0,0.3)',
            padding: '2rem',
            height: '80%',
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <h1
            style={{
              textAlign: 'center',
              fontFamily: 'Playfair Display',
              fontStyle: 'italic',
              fontSize: '3rem',
            }}>
            Welcome to Main Course!
          </h1>

          <p style={{ maxWidth: '65ch', padding: '1rem' }}>
            This is a template for building a static site with Next, Plop,
            Typescript, Husky, Prettier, ESLint, and Jest/React Testing Library.
            Main Course is currently very much a{' '}
            <strong>work in progress</strong>, so while it will eventually be a
            robust boilerplate, use at your own risk while it's still being
            developed!
          </p>
          <p>
            <a href='https://github.com/timmybytes/main-course'>
              See the source on GitHub
            </a>
          </p>

          <h2
            style={{
              textAlign: 'center',
              fontFamily: 'Playfair Display',
              fontStyle: 'italic',
              padding: '1rem',
              fontSize: '2.5rem',
            }}>
            Menu
          </h2>

          <p>Coming soon...</p>
        </div>
      </div>
    </>
  )
}
