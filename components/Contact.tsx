import Image from 'next/image'

export default function Contact() {
  return (
    <section id="lien-he" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Liên hệ với chúng tôi
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Shopee */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Image
                src="https://img.icons8.com/color/64/shopee.png"
                alt="Shopee"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Shopee</h3>
            <p className="text-gray-600">Vườn mộng mơ</p>
          </div>

          {/* Facebook */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Image
                src="https://img.icons8.com/fluency/64/facebook-new.png"
                alt="Facebook"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Facebook</h3>
            <p className="text-gray-600">56-58 Lê Hữu Kiều, P Bình Trưng Tây</p>
          </div>

          {/* TikTok */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Image
                src="https://img.icons8.com/fluency/64/tiktok.png"
                alt="TikTok"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tiktok</h3>
            <p className="text-gray-600">DT848, Tân Khánh Đồng, TP Sa Đéc</p>
          </div>
        </div>
      </div>
    </section>
  )
}

