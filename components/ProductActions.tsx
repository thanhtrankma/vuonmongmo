'use client'

import { Product } from '@/types/product'
import { useCart } from '@/contexts/CartContext'

interface ProductActionsProps {
  product: Product
}

export default function ProductActions({ product }: ProductActionsProps) {
  const { addToCart } = useCart()

  return (
    <div className="space-y-4">
      <button
        onClick={() => addToCart(product)}
        disabled={!product.inStock}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {product.inStock ? 'Thêm vào giỏ hàng' : 'Hết hàng'}
      </button>
      
      <div className="border-t border-gray-200 pt-6">
        <h3 className="font-semibold text-gray-900 mb-2">Thông tin sản phẩm</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>• Sản phẩm được chế tác thủ công</li>
          <li>• Thiết kế độc đáo, không trùng lặp</li>
          <li>• Hương thơm tự nhiên, dịu nhẹ</li>
          <li>• Phù hợp làm quà tặng</li>
        </ul>
      </div>
    </div>
  )
}

