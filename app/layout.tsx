import type { Metadata } from 'next'
import {
  Geist,
  Geist_Mono,
  Italiana,
  Beau_Rivage,
  Bodoni_Moda,
  Lora
} from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/shared/providers/SmoothScrollProvider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

const italiana = Italiana({
  variable: '--font-italiana',
  subsets: ['latin'],
  weight: '400'
})

const beauRivage = Beau_Rivage({
  variable: '--font-beau',
  subsets: ['latin'],
  weight: '400'
})

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400', '500', '600']
})

const bodoni = Bodoni_Moda({
  variable: '--font-bodoni',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Facundo Robert | Frontend Developer',
  description:
    'Frontend Developer specialized in React, Next.js, TypeScript, Tailwind CSS, scalable architecture, reusable components, and modern web experiences.',

  keywords: [
    'Facundo Robert',
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'GSAP',
    'Portfolio',
    'Web Developer',
    'JavaScript'
  ],

  authors: [{ name: 'Facundo Robert' }],
  creator: 'Facundo Robert',

  openGraph: {
    title: 'Facundo Robert | Frontend Developer',
    description:
      'Frontend Developer building modern web experiences with React, Next.js, TypeScript, and scalable frontend architecture.',
    type: 'website',
    locale: 'en_US'
  }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} ${italiana.variable} ${beauRivage.variable}  ${lora.variable} ${bodoni.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  )
}
