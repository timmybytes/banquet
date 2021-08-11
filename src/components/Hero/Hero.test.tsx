import { render } from '@test/test-utils'
import { Hero } from './Hero'

describe('Hero', () => {
  it('should render', () => {
    render(
      <Hero
        title='A Next.js boilerplate to satisfy your development cravings'
        subtitle='Main Course is fast, powerful, and full-flavored with default tools and configurations for building modern websites.'
        image='main-course-card.png'
        ctaLink='https://github.com/timmybytes/main-course'
        ctaLabel='View on GitHub'
      />
    )
  })
})
