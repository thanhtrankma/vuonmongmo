import Hero from '@/components/Hero'
import About from '@/components/About'
import FeaturedProducts from '@/components/FeaturedProducts'
import ProductGallery from '@/components/ProductGallery'
import Contact from '@/components/Contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vườn Mộng Mơ - Nến Thơm Nghệ Thuật Từ Những Khu Vườn Đầy Cảm Hứng',
  description: 'Nến thơm dẫn lối, hương thơm ngọt lành, chào mừng bạn đến với khu vườn của những giấc mơ đẹp! Khám phá bộ sưu tập nến nghệ thuật với thiết kế vườn mini độc đáo.',
  openGraph: {
    title: 'Vườn Mộng Mơ - Nến Thơm Nghệ Thuật',
    description: 'Nến thơm dẫn lối, hương thơm ngọt lành, chào mừng bạn đến với khu vườn của những giấc mơ đẹp!',
    type: 'website',
    images: ['https://images.unsplash.com/photo-1602874805490-6c0a4c3e2e5a?w=1200&h=630&fit=crop'],
  },
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: 'Vườn Mộng Mơ',
    description: 'Nến thơm nghệ thuật từ những khu vườn đầy cảm hứng',
    url: 'https://vuonmongmo.com',
    telephone: '03 656 14597',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '73 Yên Bình Yên Nghĩa',
      addressLocality: 'Hà Đông',
      addressCountry: 'VN',
    },
    sameAs: [
      'https://shopee.vn/vuonmongmo',
      'https://facebook.com/vuonmongmo',
      'https://tiktok.com/@vuonmongmo',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <FeaturedProducts />
      <ProductGallery />
      <Contact />
    </>
  )
}

