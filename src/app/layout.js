import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sultan Idrisi | Web & SEO Developer',
  description: 'Welcome to Sultan Idrisi Portfolio, Experienced Web & SEO Developer. I have good knowledge in web development and digital marketing.',
  icons: {
    icon: '/icon.png', // /public path
  },
}



export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <head>
          <meta name="google-site-verification" content="qx0XqICRZYUksuAMfswDnNtixRxL-WrjA1KSuPdjdXY" />
      </head>
      <body className={`{inter.className} bg-[rgb(36,36,36)] text-white scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80`}>
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
