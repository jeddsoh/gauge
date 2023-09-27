import './globals.css'
import type { Metadata } from 'next'
import { sans, serif } from './fonts'
import { Providers } from "./providers"

export const metadata: Metadata = {
  title: 'Gauge | UX Consultancy',
  description: 'Gauge is a consultancy of designs, engineers, ethnographers and data scientists; dedicated as a group to help you find clear causality from within the wisdom of crowds.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark text-foreground bg-background text-base'>
      <body className={sans.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
