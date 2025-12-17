import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cover.png"
          alt="Nến thơm Vườn Mộng Mơ"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="absolute top-6 left-6 z-10 p-2">
        <Image
          width={96}
          height={96}
          alt="Logo Vườn mơ màng"
          className="w-24 h-24 rounded-full"
          src="/images/logo.png"
        />
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4">
            <Image
              src="https://img.icons8.com/color/96/leaf.png"
              alt="Biểu tượng chiếc lá"
              width={32}
              height={32}
            />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
        🌿🌿 VƯỜN MỘNG MƠ 🌿🌿
        </h1>
        <p className="text-lg md:text-xl max-w-6xl mx-auto leading-relaxed">
        🌿🌿 Nến thơm dẫn lối, hương thơm ngọt lành,chào mừng bạn đến với khu vườn của những giấc mơ đẹp ! 🌿🌿
        </p>
      </div>
    </section>
  )
}

