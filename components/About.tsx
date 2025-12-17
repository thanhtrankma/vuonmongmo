import Image from 'next/image'

export default function About() {
  return (
    <section id="ve-chung-toi" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Về Vườn Mơ Màng
            </h2>
            <h3 className="text-2xl font-semibold text-primary-700 mb-4">
              🌿✨ Khi giấc mơ hóa hương thơm 🕯️🌸
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Ở một góc nhỏ của thế giới, nơi thời gian trôi chậm lại, có một khu vườn chẳng bao giờ úa tàn. Ở đó, từng ngọn nến không chỉ tỏa sáng, mà còn kể những câu chuyện dịu dàng. Đó là Vườn mơ màng – khu vườn được tạo nên từ ánh sáng, màu sắc và những giấc mơ.
              </p>
              <p>
                🌵 Một chậu xương rồng bé nhỏ, nhưng lại kiên cường giữa sa mạc rộng lớn. Nó nhắc ta nhớ rằng dù thế giới có khắc nghiệt thế nào, chỉ cần một tia sáng ấm áp, ta vẫn có thể vững vàng.
              </p>
              <p>
                🌸 Một bông hoa hồng bung nở, đẹp kiêu sa nhưng cũng thật mềm mại, như những khoảnh khắc dịu dàng giữa bộn bề cuộc sống, như những yêu thương ta dành cho nhau mà không cần lời nói.
              </p>
              <p>
                🌱 Một mảng cỏ xanh mướt, biểu tượng của hy vọng và bình yên, nhắc nhở rằng dù ngày hôm nay có ra sao, ngày mai vẫn luôn rộng mở.
              </p>
              <p>
                Mỗi ngọn nến trong khu vườn này không chỉ là một tác phẩm nghệ thuật, mà còn là một câu chuyện, một món quà, một lời nhắn gửi yêu thương. Khi ánh nến lung linh, cũng là lúc không gian trở nên ấm áp, dịu dàng hơn. Bạn không chỉ thắp sáng một ngọn nến, mà còn thắp sáng cả những cảm xúc, những kỷ niệm và những ước mơ.
              </p>
              <p>
                🕯️ Hãy để Vườn mơ màng mang đến cho bạn một khu vườn thu nhỏ trong ánh sáng – nơi giấc mơ nở hoa, nơi mỗi ngày đều có một chút phép màu! ✨💖
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-xl font-semibold text-primary-700 mb-3">
                🌿✨ Vườn mơ màng – Nến nghệ thuật từ những khu vườn đầy cảm hứng ✨🌿
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Bộ sưu tập nến của Vườn mơ màng là những khu vườn thu nhỏ, nơi ánh sáng hòa cùng sắc màu thiên nhiên, tạo nên những tác phẩm đầy cảm xúc. Từng ngọn nến không chỉ là vật trang trí, mà còn mang đến sự ấm áp, thư giãn và ý nghĩa sâu sắc.
              </p>
            </div>
          </div>
          
          <div className="relative h-[900px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop"
              alt="Về Vườn Mơ Màng"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

