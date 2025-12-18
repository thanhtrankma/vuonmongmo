import Link from 'next/link'
import { Metadata } from 'next'
import { candleStories } from '@/data/stories'

export const metadata: Metadata = {
  title: 'Truyện Mơ Màng - Những câu chuyện từ khu vườn nến',
  description:
    'Góc nhỏ kể chuyện về những cốc nến – nơi mỗi thiết kế là một mảnh cảm xúc, một câu chuyện dịu dàng trong khu vườn Vườn Mơ Màng.',
}

export default function DreamyStoriesPage() {
  return (
    <main className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4 text-3xl md:text-4xl">
            <span aria-hidden="true">🕯️</span>
            <span aria-hidden="true">🌙</span>
            <span aria-hidden="true">✨</span>
          </div>
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-600 mb-3">
            TRUYỆN MƠ MÀNG
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Góc nhỏ kể chuyện
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Mỗi thiết kế nến tại Vườn Mơ Màng đều mang theo một câu chuyện riêng.
            Đây là nơi chúng mình gom lại những mảnh cảm xúc đó – thật chậm, thật
            dịu dàng, dành tặng bạn.
          </p>
        </header>

        <section className="space-y-10 md:space-y-12">
          {candleStories.map((story) => (
            <article
              key={story.slug}
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="md:flex">
                {story.coverImage && (
                  <div className="md:w-2/5">
                    <div className="h-56 md:h-full w-full overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={story.coverImage}
                        alt={story.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                )}

                <div className="md:w-3/5 p-6 md:p-8 flex flex-col h-full">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4">
                    {story.relatedProductId && (
                      <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 font-medium">
                        <span className="mr-1" aria-hidden="true">
                          ✨
                        </span>
                        <span>Câu chuyện từ một cốc nến trong vườn</span>
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1">
                      <span aria-hidden="true">🌟</span>
                      <span>Truyện mơ màng</span>
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                    {story.title}
                  </h2>

                  {story.subtitle && (
                    <p className="text-sm md:text-base text-emerald-700 mb-4">
                      {story.subtitle}
                    </p>
                  )}

                  <p className="text-sm md:text-base text-gray-700 mb-6">
                    {story.excerpt}
                  </p>

                  <div className="mt-auto">
                    <Link
                      href={`/truyen-mo-mang/${story.slug}`}
                      className="inline-block btn-secondary"
                    >
                      Xem thêm
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}


