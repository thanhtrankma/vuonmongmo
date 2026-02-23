import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { candleStories } from '@/data/stories'
import ScrollReveal from '@/components/ScrollReveal'

interface StoryPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: StoryPageProps): Promise<Metadata> {
  const story = candleStories.find((s) => s.slug === params.slug)

  if (!story) {
    return {
      title: 'Truyện không tìm thấy - Vườn Mơ Màng',
    }
  }

  return {
    title: `${story.title} - Truyện Mơ Màng`,
    description: story.excerpt,
    openGraph: {
      title: `${story.title} - Truyện Mơ Màng`,
      description: story.excerpt,
      images: story.coverImage ? [story.coverImage] : undefined,
      type: 'article',
    },
  }
}

export default function StoryPage({ params }: StoryPageProps) {
  const story = candleStories.find((s) => s.slug === params.slug)

  if (!story) {
    notFound()
  }

  return (
    <main className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <Link
            href="/truyen-mo-mang"
            className="text-sm text-primary-600 hover:text-primary-700 transition-colors"
          >
            ← Quay lại Truyện mơ màng
          </Link>
        </div>

        <ScrollReveal direction="up">
          <article>
            <header className="mb-8">
              <p className="text-xs font-semibold tracking-[0.3em] text-emerald-600 mb-3">
                TRUYỆN MƠ MÀNG
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {story.title}
              </h1>
              {story.subtitle && (
                <p className="text-base md:text-lg text-emerald-700 mb-3">
                  {story.subtitle}
                </p>
              )}
              <p className="text-sm md:text-base text-gray-600">
                {story.excerpt}
              </p>
            </header>

            {story.coverImage && (
              <div className="mb-8 rounded-2xl overflow-hidden shadow-md border border-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={story.coverImage}
                  alt={story.title}
                  className="w-full h-72 md:h-80 object-cover"
                />
              </div>
            )}

            <div className="prose prose-sm md:prose-base prose-emerald max-w-none text-gray-800 leading-relaxed">
              {story.content.split('\n\n').map((paragraph) => (
                <p key={paragraph.slice(0, 20)}>{paragraph}</p>
              ))}
            </div>
          </article>
        </ScrollReveal>
      </div>
    </main>
  )
}


