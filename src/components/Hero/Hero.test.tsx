import { SITE_DATA } from '@components/Meta'
import { render } from '@test/test-utils'
import { Hero } from './Hero'

describe('Hero', () => {
  it('should render', () => {
    render(
      <Hero
        heading='A Next.js boilerplate to satisfy your development cravings'
        subheading='Banquet is fast, powerful, and full-flavored with default tools and configurations for building modern websites.'
        image='banquet-card.png'
        ctaLink={SITE_DATA.repo}
        ctaLabel='View on GitHub'
      />
    )
  })
})
