'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCart } from '@/contexts/CartContext'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, getTotalPrice, updateQuantity, removeFromCart, clearCart } = useCart()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const total = getTotalPrice()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)
    setLoading(true)
    try {
      const res = await fetch('/api/notify-telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          address,
          items,
          total,
        }),
      })

      if (!res.ok) {
        throw new Error('Không gửi được thông báo, vui lòng thử lại.')
      }

      clearCart()
      setMessage({ type: 'success', text: 'Đặt hàng thành công! Chúng tôi sẽ liên hệ sớm.' })
      setShowSuccessModal(true)
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Có lỗi xảy ra khi đặt hàng. Vui lòng thử lại hoặc gọi 03 656 14597.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowSuccessModal(false)}
          />
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full mx-4 text-center animate-bounce-in">
            <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-4xl">🎉</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Đặt hàng thành công!</h3>
            <p className="text-gray-600 mb-6">
              Cảm ơn bạn đã đặt hàng tại Vườn Mộng Mơ 💚<br />
              Chúng tôi sẽ liên hệ sớm nhất!
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => router.push('/')}
                className="btn-primary w-full"
              >
                🏠 Về trang chủ
              </button>
              <button
                onClick={() => router.push('/san-pham')}
                className="btn-secondary w-full"
              >
                🛒 Tiếp tục mua sắm
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gray-50 min-h-screen py-10 md:py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Thanh toán</h1>
            <p className="text-gray-600">Xác nhận thông tin và hoàn tất đơn hàng</p>
          </div>
          <Link href="/san-pham" className="text-primary-600 hover:text-primary-500 text-sm">
            Tiếp tục mua sắm
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-700 font-semibold">
                1
              </span>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Thông tin nhận hàng</h2>
                <p className="text-sm text-gray-500">Vui lòng nhập đầy đủ để chúng tôi liên hệ giao hàng.</p>
              </div>
            </div>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-transparent bg-gray-50 focus:bg-white focus:border-primary-400 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none shadow-sm px-3 py-2.5"
                  placeholder="Nguyễn Văn A"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  pattern="^(0|\\+84)[0-9]{8,10}$"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-transparent bg-gray-50 focus:bg-white focus:border-primary-400 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none shadow-sm px-3 py-2.5"
                  placeholder="03 656 14597"
                />
                <p className="text-xs text-gray-500">Ví dụ: 0365614597 hoặc +849365614597</p>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Địa chỉ nhận hàng <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full rounded-xl border border-transparent bg-gray-50 focus:bg-white focus:border-primary-400 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none shadow-sm px-3 py-2.5"
                  rows={3}
                  placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành"
                />
              </div>

              {message && (
                <div
                  className={`rounded-lg p-3 text-sm ${
                    message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                  }`}
                >
                  {message.text}
                </div>
              )}

              <button
                type="submit"
                className="btn-primary w-full"
                disabled={loading || items.length === 0 || !name || !phone || !address}
              >
                {loading ? 'Đang gửi...' : 'Đặt hàng'}
              </button>
              <p className="text-xs text-gray-500">
                Bằng việc đặt hàng, bạn đồng ý cho chúng tôi liên hệ qua số điện thoại để xác nhận đơn.
              </p>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Giỏ hàng</h2>
            {items.length === 0 ? (
              <p className="text-gray-600">Giỏ hàng của bạn đang trống.</p>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-gray-100">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center rounded-full border border-gray-200 bg-gray-50">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-9 h-9 flex items-center justify-center text-gray-700 hover:rounded-l-full hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150"
                            aria-label="Giảm số lượng"
                          >
                            –
                          </button>
                          <span className="w-12 text-center font-medium text-gray-800">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-9 h-9 flex items-center justify-center text-gray-700 hover:rounded-r-full hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150"
                            aria-label="Tăng số lượng"
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-sm text-red-500 hover:text-red-600"
                        >
                          Xóa
                        </button>
                      </div>
                      <p className="text-primary-600 font-semibold mt-2">
                        {new Intl.NumberFormat('vi-VN').format(item.price * item.quantity)} đ
                      </p>
                    </div>
                  </div>
                ))}

                <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-semibold text-gray-900">
                  <span>Tổng cộng</span>
                  <span>{new Intl.NumberFormat('vi-VN').format(total)} đ</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

