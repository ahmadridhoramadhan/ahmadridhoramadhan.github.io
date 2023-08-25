import Footer from '@/components/layout/footer'
import './globals.css'
import type { Metadata } from 'next'

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
        <header></header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
