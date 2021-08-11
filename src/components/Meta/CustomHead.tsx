const HEAD_DATA = {
  title: 'Main Course',
  description:
    'Main Course is a boilerplate for Next.js projects with build-in support for TypeScript, SCSS, Jest, Handlebars, Chakra UI, and more.',
  color: '#e9c46a',
  repo: 'https://github.com/timmybytes/main-course',
  url: 'main-course.netlify.app',
  img: 'main-course-card.png',
}

export const MetaHead = (): JSX.Element => (
  <>
    <meta name='title' content={HEAD_DATA.title} key='meta-title' />
    <meta name='description' content={HEAD_DATA.description} />
    <link
      rel='apple-touch-icon'
      sizes='180x180'
      href='/favicons/apple-touch-icon.png'
      key='apple-touch-icon'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='32x32'
      href='/favicons/favicon-32x32.png'
      key='favicon-32x32'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='16x16'
      href='/favicons/favicon-16x16.png'
      key='favicon-16x16'
    />
    <link
      rel='mask-icon'
      href='/safari-pinned-tab.svg'
      color={HEAD_DATA.color}
      key='safari-pinned-tab'
    />
    <meta
      name='msapplication-TileColor'
      content={HEAD_DATA.color}
      key='ms-tile'
    />
    <meta name='theme-color' content={HEAD_DATA.color} key='theme-color' />
    <meta property='og:locale' content='en_US' key='og-locale' />
    <meta property='og:type' content='website' key='og-type' />
    <meta property='og:title' content={HEAD_DATA.title} key='og-title' />
    <meta
      property='og:description'
      content={HEAD_DATA.description}
      key='og-description'
    />
    <meta property='og:url' content={HEAD_DATA.url} key='og-url' />
    <meta property='og:image' content={HEAD_DATA.img} key='og-img' />
    <meta property='og:image:type' content='image/png' key='og-img-type' />
    <meta property='og:image:alt' content='Main Course logo' key='og-img-alt' />
    <meta property='og:image:width' content='1200' key='og-img-width' />
    <meta property='og:image:height' content='647' key='og-img-height' />
    <meta
      property='twitter:card'
      content='summary_large_image'
      key='twitter-card'
    />
    <meta property='twitter:image' content={HEAD_DATA.img} key='twitter-img' />
    <meta
      property='twitter:creator'
      content='@timmybytes'
      key='twitter-creator'
    />
  </>
)
