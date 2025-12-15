import { products } from '@/data/products'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Metadata } from 'next'
import ProductActions from '@/components/ProductActions'

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    return {
      title: 'Sản phẩm không tìm thấy - Vườn Mộng Mơ',
    }
  }

  return {
    title: `${product.title || product.name} - Vườn Mộng Mơ`,
    description: product.description,
    openGraph: {
      title: `${product.title || product.name} - Vườn Mộng Mơ`,
      description: product.description,
      images: [product.image],
      type: 'website',
    },
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price)
  }

  const originalPrice = Math.round(product.price * 1.2)

  const highlights = [
    'Nến hoa thủ công, thiết kế riêng cho từng khu vườn nhỏ xinh',
    'Hương thơm dịu nhẹ, ấm áp, thư giãn sau một ngày dài',
    'An toàn cho sức khỏe, dùng cho phòng ngủ, bàn làm việc',
  ]

  const materials = [
    'Sáp đậu nành tự nhiên, an toàn cho sức khỏe và thân thiện với môi trường',
    'Ngọn bấc cotton, cháy lâu, hạn chế khói đen',
    'Tinh dầu thơm nhẹ nhàng, mang hương ký ức gần gũi',
  ]

  const usage = [
    'Làm quà tặng tinh tế, mang lại yêu thương dịu dàng',
    'Tạo không gian ấm áp, thư giãn nhẹ nhàng mỗi ngày',
    'Dùng để trang trí bàn làm việc, góc nhỏ trong nhà, góc chill bên cửa sổ',
  ]

  const commitments = [
    '100% nguồn nguyên liệu tự nhiên',
    'An toàn cho sức khỏe và môi trường',
    'Quy trình sản xuất thủ công, tỉ mỉ từng chi tiết',
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images || [product.image],
    brand: {
      '@type': 'Brand',
      name: 'Vườn Mộng Mơ',
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'VND',
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      url: `https://vuonmongmo.com/san-pham/${product.id}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="py-10 md:py-16 bg-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 xl:gap-14 max-w-6xl mx-auto">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative h-[460px] w-full rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {product.images && product.images.length > 0 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-24 rounded-lg overflow-hidden border border-gray-100"
                    >
                      <Image
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  {product.name}
                </h1>
                <p className="text-lg md:text-xl font-semibold text-primary-700 leading-snug">
                  {product.title}
                </p>
                <p className="text-primary-700">
                  {product.description}
                </p>
                <div className="text-sm text-yellow-600 flex items-center gap-2">
                  <span className="text-base">⭐ 4.9</span>
                  <span>·</span>
                  <span>120 đánh giá</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <p className="text-3xl font-bold text-primary-600">
                  {formatPrice(product.price)} đ
                </p>
                <p className="text-gray-400 line-through">
                  {formatPrice(originalPrice)} đ
                </p>
              </div>

              <ul className="space-y-2 text-gray-700">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-primary-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3">
                <span
                  className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                    product.inStock
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {product.inStock ? 'Còn hàng' : 'Hết hàng'}
                </span>
                <span className="text-sm text-gray-500">
                  Gọi đặt mua: 0962841055
                </span>
              </div>

              <ProductActions product={product} />
            </div>
          </div>

          {/* Details */}
          <div className="max-w-5xl mx-auto mt-12 space-y-8">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">Mô tả sản phẩm</h2>
              <p className="text-gray-700">
                {product.description}
              </p>
              <ul className="space-y-2 text-gray-700">
                {materials.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-primary-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">Công dụng</h2>
              <ul className="space-y-2 text-gray-700">
                {usage.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-primary-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">Cam kết bán hàng</h2>
              <ul className="space-y-2 text-gray-700">
                {commitments.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-primary-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

          </div>
        </div>
      </div>
    </>
  )
}

