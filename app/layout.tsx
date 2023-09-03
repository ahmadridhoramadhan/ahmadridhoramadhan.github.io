
import Footer from '@/components/layout/footer'
import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/layout/header'

export const metadata: Metadata = {
  title: 'Ahmad Ridho Ramadhan',
  description: 'Ahmad Ridho Ramadhan portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col min-h-screen'>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  )
}
