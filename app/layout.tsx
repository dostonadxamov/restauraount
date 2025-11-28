import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BISOFT - AQLLI BIZNES YECHIMLAR',
  description: '',
  generator: '',
  icons: {
    icon: '/web-app-manifest-512x512.png',
    shortcut: '/web-app-manifest-512x512.png',
    apple: '/web-app-manifest-512x512.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/web-app-manifest-512x512.png" sizes="512x512" />
        <link rel="icon" type="image/png" href="/web-app-manifest-192x192.png" sizes="192x192" />
        <link rel="shortcut icon" href="/web-app-manifest-512x512.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/web-app-manifest-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
