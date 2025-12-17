'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'

export default function Header() {
  const { getTotalItems, setIsOpen } = useCart()

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary-700">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Vườn mơ màng"
                width={48}
                height={48}
                priority
              />
              <span>Vườn mơ màng</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#ve-chung-toi" className="text-gray-700 hover:text-primary-600 transition-colors">
              Về chúng tôi
            </Link>
            <Link href="/san-pham" className="text-gray-700 hover:text-primary-600 transition-colors">
              Sản Phẩm
            </Link>
            <Link href="/#hinh-anh" className="text-gray-700 hover:text-primary-600 transition-colors">
              Hình Ảnh
            </Link>
            <Link href="/#lien-he" className="text-gray-700 hover:text-primary-600 transition-colors">
              Liên Hệ
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors"
            aria-label="Giỏ hàng"
          >
            <Image
              src="https://img.icons8.com/ios-glyphs/48/shopping-cart.png"
              alt="Giỏ hàng"
              width={24}
              height={24}
              priority
            />
            {getTotalItems() > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}

