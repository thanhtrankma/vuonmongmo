import Image from 'next/image'
import Cart from './Cart'

export default function Footer() {
  return (
    <>
      <Cart />
      <footer
        className="relative text-white"
        style={{
          backgroundImage: 'url(/images/footer.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary-900/80" />
        <div className="relative container mx-auto px-4 py-10">
          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Vườn Mơ Màng</h3>
              <div className="space-y-3 text-gray-100">
                <div className="flex items-start gap-3">
                  <Image
                    src="https://img.icons8.com/ios-glyphs/30/ffffff/phone.png"
                    alt="Phone"
                    width={20}
                    height={20}
                  />
                  <div>
                    <p className="font-medium">Điện thoại / Zalo / Viber</p>
                    <p>03 656 14597</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Image
                    src="https://img.icons8.com/ios-glyphs/30/ffffff/marker.png"
                    alt="Địa chỉ"
                    width={20}
                    height={20}
                  />
                  <div>
                    <p className="font-medium">Địa chỉ</p>
                    <p>235 Yên Hoà, Hà Nội</p>
                    <a
                      href="https://maps.google.com/?q=235+Yên+Hoà,+Hà+Nội"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-200 hover:text-primary-100 underline"
                    >
                      Xem địa chỉ
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://shopee.vn/vuonmomang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-100 hover:text-white"
                >
                  <Image
                    src="https://img.icons8.com/color/48/shopee.png"
                    alt="Shopee"
                    width={28}
                    height={28}
                  />
                  <span>Shopee</span>
                </a>
                <a
                  href="https://facebook.com/vuonmomang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-100 hover:text-white"
                >
                  <Image
                    src="https://img.icons8.com/fluency/48/facebook-new.png"
                    alt="Facebook"
                    width={28}
                    height={28}
                  />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://tiktok.com/@vuonmomang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-100 hover:text-white"
                >
                  <Image
                    src="https://img.icons8.com/fluency/48/tiktok.png"
                    alt="Tiktok"
                    width={28}
                    height={28}
                  />
                  <span>Tiktok</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Bản đồ</h4>
              <div className="w-full h-64 bg-primary-800/70 rounded-lg overflow-hidden border border-primary-700/40 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.123456789!2d105.1234567!3d21.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA3JzI0LjQiTiAxMDXCsDA3JzI0LjQiRQ!5e0!3m2!1svi!2s!4v1234567890123!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bản đồ Vườn Mơ Màng"
                />
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-6 text-center text-gray-100">
            <p>Copyright © 2023 Vườn mơ màng. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

