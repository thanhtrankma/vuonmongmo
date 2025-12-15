import { products } from '@/data/products'
import ProductCard from './ProductCard'

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 2)

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          SẢN PHẨM NỔI BẬT
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/san-pham"
            className="btn-secondary inline-block"
          >
            Xem tất cả sản phẩm
          </a>
        </div>
      </div>
    </section>
  )
}

