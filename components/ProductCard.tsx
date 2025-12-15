'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types/product'
import { useCart } from '@/contexts/CartContext'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/san-pham/${product.id}`}>
        <div className="relative h-64 w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      
      <div className="p-6">
        <Link href={`/san-pham/${product.id}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-2xl font-bold text-primary-600 mb-4">
          {formatPrice(product.price)} đ
        </p>
        
        <button
          onClick={() => addToCart(product)}
          className="w-full btn-primary"
          disabled={!product.inStock}
        >
          {product.inStock ? 'Thêm vào giỏ' : 'Hết hàng'}
        </button>
      </div>
    </div>
  )
}

