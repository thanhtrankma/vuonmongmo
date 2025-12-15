import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sản Phẩm - Vườn Mộng Mơ',
  description: 'Khám phá bộ sưu tập nến thơm nghệ thuật của Vườn Mộng Mơ. Từ hoa mộng mơ đến gai dịu dàng, mỗi sản phẩm là một tác phẩm nghệ thuật độc đáo.',
  openGraph: {
    title: 'Sản Phẩm - Vườn Mộng Mơ',
    description: 'Khám phá bộ sưu tập nến thơm nghệ thuật của Vườn Mộng Mơ',
    type: 'website',
  },
}

export default function ProductsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Sản Phẩm Vườn Mộng Mơ',
    description: 'Bộ sưu tập nến thơm nghệ thuật',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: products.map((product, index) => ({
        '@type': 'Product',
        position: index + 1,
        name: product.name,
        description: product.description,
        image: product.image,
        offers: {
          '@type': 'Offer',
          price: product.price,
          priceCurrency: 'VND',
          availability: product.inStock
            ? 'https://schema.org/InStock'
            : 'https://schema.org/OutOfStock',
        },
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="py-16 md:py-24 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Tất cả sản phẩm
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Khám phá bộ sưu tập nến thơm nghệ thuật của chúng tôi. Mỗi sản phẩm được chế tác thủ công với tình yêu và sự chăm chút.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

