import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/contexts/CartContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin', 'vietnamese'] })

export const metadata: Metadata = {
  title: 'Vườn Mộng Mơ - Nến Thơm Nghệ Thuật Từ Những Khu Vườn Đầy Cảm Hứng',
  description: 'Nến thơm dẫn lối, hương thơm ngọt lành, chào mừng bạn đến với khu vườn của những giấc mơ đẹp! Khám phá bộ sưu tập nến nghệ thuật với thiết kế vườn mini độc đáo.',
  keywords: 'nến thơm, nến nghệ thuật, vườn mộng mơ, scented candles, decorative candles, vietnam candles',
  authors: [{ name: 'Vườn Mộng Mơ' }],
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'Vườn Mộng Mơ - Nến Thơm Nghệ Thuật',
    description: 'Nến thơm dẫn lối, hương thơm ngọt lành, chào mừng bạn đến với khu vườn của những giấc mơ đẹp!',
    type: 'website',
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vườn Mộng Mơ - Nến Thơm Nghệ Thuật',
    description: 'Nến thơm dẫn lối, hương thơm ngọt lành, chào mừng bạn đến với khu vườn của những giấc mơ đẹp!',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}

