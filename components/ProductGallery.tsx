import Image from 'next/image'

export default function ProductGallery() {
  const images = [
    {
      src: '/images/nang_mong_mo/nang_mong_mo.jpg',
      alt: 'Nến thơm Vườn Mộng Mơ',
    },
    {
      src: '/images/gai_diu_dang/gai_diu_dang.jpg',
      alt: 'Bộ sưu tập nến thơm',
    },
  ]

  return (
    <section id="hinh-anh" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Hình ảnh sản phẩm
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

