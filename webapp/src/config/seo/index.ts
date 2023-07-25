import { DefaultSeoProps } from 'next-seo'
const title = 'Web Hosting Services in Costa Rica'
const description =
  'Costa Rica Servers provides reliable and affordable web hosting services in Costa Rica. Our services include shared hosting, VPS hosting, and dedicated servers.'
const url = 'https://crservers.com'

const SEO: DefaultSeoProps = {
  titleTemplate: '%s',
  title,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    locale: 'en',
    url,
    title,
    description,
    site_name: 'Costa Rica Servers',
    images: [
      {
        url: `${url}/images/preview-image.png`,
        alt: title
      }
    ]
  },
  twitter: {
    handle: 'CR Servers',
    site: 'CR Servers',
    cardType: 'summary_large_image'
  }
}

export default SEO
