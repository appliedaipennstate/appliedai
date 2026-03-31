import type { Metadata } from 'next'

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://appliedaipennstate.com'),
  title: {
    default: 'Applied AI Club at Penn State',
    template: '%s | Applied AI',
  },
  description:
    'Where Penn State students learn to think with AI. Guest speakers, hands-on tool walkthroughs, and real projects through Applied AI Labs.',
  keywords: [
    'AI',
    'artificial intelligence',
    'Penn State',
    'student club',
    'applied AI',
    'machine learning',
    'Smeal College of Business',
    'AI tools',
    'Claude',
    'ChatGPT',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://appliedaipennstate.com',
    siteName: 'Applied AI Club at Penn State',
    title: 'Applied AI Club at Penn State',
    description:
      'Where Penn State students learn to think with AI. Guest speakers, hands-on tool walkthroughs, and real projects through Applied AI Labs.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Applied AI Club at Penn State',
    description:
      'Where Penn State students learn to think with AI. Guest speakers, hands-on sessions, and real projects.',
  },
}
