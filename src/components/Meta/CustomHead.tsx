import { SITE_DATA } from '@components/Meta'

export const MetaHead = (): JSX.Element => (
  <>
    <meta name='title' content={SITE_DATA.title} key='meta-title' />
    <meta name='description' content={SITE_DATA.description} />
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
      color={SITE_DATA.color}
      key='safari-pinned-tab'
    />
    <meta
      name='msapplication-TileColor'
      content={SITE_DATA.color}
      key='ms-tile'
    />
    <meta name='theme-color' content={SITE_DATA.color} key='theme-color' />
    <meta property='og:locale' content='en_US' key='og-locale' />
    <meta property='og:type' content='website' key='og-type' />
    <meta property='og:title' content={SITE_DATA.title} key='og-title' />
    <meta
      property='og:description'
      content={SITE_DATA.description}
      key='og-description'
    />
    <meta property='og:url' content={SITE_DATA.url} key='og-url' />
    <meta property='og:image' content={SITE_DATA.img} key='og-img' />
    <meta property='og:image:type' content='image/png' key='og-img-type' />
    <meta
      property='og:image:alt'
      content={`${SITE_DATA.title} logo`}
      key='og-img-alt'
    />
    <meta property='og:image:width' content='1200' key='og-img-width' />
    <meta property='og:image:height' content='647' key='og-img-height' />
    <meta
      property='twitter:card'
      content='summary_large_image'
      key='twitter-card'
    />
    <meta property='twitter:image' content={SITE_DATA.img} key='twitter-img' />
    <meta
      property='twitter:creator'
      content={SITE_DATA.authorHandle}
      key='twitter-creator'
    />
  </>
)
