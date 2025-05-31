'use client'

import { type Metadata } from 'next'

export function Head({ metadata }: { metadata: Metadata }) {
  const title = metadata.title?.toString() || 'C L E L I A'
  const description =
    metadata.description?.toString() ||
    'Open Source Engineer at LlamaIndex | Working on AI Development | Convinced Pythonist | GitHub Geek'
  const image = 'https://link.clelia.dev/opengraph-image.png'
  const url = 'https://link.clelia.dev'
  const author = 'Clelia Astra Bertelli'
  const githubHandle = '@AstraBert'

  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* General */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#000000" />
      <meta name="color-scheme" content="dark light" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={author} />
      <meta property="og:image:type" content="image/png" />

      {/* GitHub */}
      <meta name="github:card" content="summary_large_image" />
      <meta name="github:creator" content={githubHandle} />
      <meta name="github:title" content={title} />
      <meta name="github:description" content={description} />
      <meta name="github:image" content={image} />
      <meta name="github:image:alt" content={author} />

      {/* Icons & Manifest */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </head>
  )
}
