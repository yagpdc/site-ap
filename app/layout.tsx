import type { Metadata } from 'next'
import { Roboto_Slab } from 'next/font/google'
import './globals.css'

const inter = Roboto_Slab({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abrindo Portas',
  description: 'Abrindo Portas Inglês para todos',
  icons: [
    {
      url: '/favicon',
      rel: 'icon',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      
      <html lang="en">
      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="13x80"></link>
        <body className={inter.className}>{children}</body>
      </html>
    </>
  )
}
