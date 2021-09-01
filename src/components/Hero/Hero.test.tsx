import { SITE_DATA } from '@components/Meta'
import { render } from '@test/test-utils'
import { Hero } from './Hero'

describe('Hero', () => {
  it('should render', () => {
    render(
      <Hero
        heading='A Next.js boilerplate to satisfy your development cravings'
        subheading='Banquet is fast, powerful, and full-flavored with default tools and configurations for building modern websites.'
        image='https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
        ctaLink={SITE_DATA.repo}
        ctaLabel='View on GitHub'
      />
    )
  })
})
