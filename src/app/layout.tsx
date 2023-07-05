import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Image Gallery',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>This div is shared across the layouts</div>
        {children}
      </body>
    </html>
  )
}
