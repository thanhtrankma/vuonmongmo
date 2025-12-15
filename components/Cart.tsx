'use client'

import { useCart } from '@/contexts/CartContext'
import Image from 'next/image'
import Link from 'next/link'

export default function Cart() {
  const {
    items,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    isOpen,
    setIsOpen,
  } = useCart()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Giỏ hàng</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Đóng giỏ hàng"
            >
              <Image
                src="https://img.icons8.com/ios-glyphs/48/delete-sign.png"
                alt="Đóng"
                width={24}
                height={24}
              />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">Giỏ hàng của bạn đang trống</p>
              <button
                onClick={() => setIsOpen(false)}
                className="btn-primary"
              >
                Tiếp tục mua sắm
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 truncate">
                        {item.name}
                      </h3>
                      <p className="text-primary-600 font-medium">
                        {formatPrice(item.price)} đ
                      </p>
                      
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                          aria-label="Giảm số lượng"
                        >
                          -
                        </button>
                        <span className="w-12 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                          aria-label="Tăng số lượng"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 self-start"
                      aria-label="Xóa sản phẩm"
                    >
                      <Image
                        src="https://img.icons8.com/ios-glyphs/48/trash--v1.png"
                        alt="Xóa"
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-gray-900">
                    Tổng cộng:
                  </span>
                  <span className="text-2xl font-bold text-primary-600">
                    {formatPrice(getTotalPrice())} đ
                  </span>
                </div>
                
                <Link href="/checkout" className="w-full btn-primary mb-2 text-center inline-block">
                  Thanh toán
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full btn-secondary"
                >
                  Tiếp tục mua sắm
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

