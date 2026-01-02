import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'
import type { Metadata } from 'next'
import { BackgroundElements } from '@/app/(frontend)/components/background'

export const metadata: Metadata = {
  title: 'Notes | güneye giderken',
  description: 'güneye giderken notlar',
}

export const revalidate = 3600 // 1 saat cache

export default async function BlogPage() {
  const payload = await getPayload({ config })

  const { docs: posts } = await payload.find({
    collection: 'blog',
    where: {
      status: { equals: 'published' },
    },
    sort: '-publishedAt',
    limit: 50,
  })

  return (
    <>
      {/* Background Elements */}
      <BackgroundElements />

      {/* Back Link */}
      <Link
        href="/"
        className="fixed top-8 left-8 z-50 inline-flex items-center gap-2 text-terracotta no-underline font-sans text-sm font-medium tracking-tight transition-all duration-300 hover:text-terracotta-light hover:-translate-x-1 max-sm:top-6 max-sm:left-6 max-sm:text-xs"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M10 12L6 8L10 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        guney.com
      </Link>

      {/* Main Content */}
      <main className="relative z-20 min-h-screen flex flex-col justify-center items-center p-8 pt-24 pb-32 max-sm:p-4 max-sm:pt-20">
        <div className="max-w-[640px] w-full max-h-[75vh] overflow-y-auto bg-cream p-12 rounded-[20px] shadow-[0_8px_40px_rgba(44,42,38,0.08),0_2px_8px_rgba(44,42,38,0.04)] max-sm:max-h-[85vh] max-sm:p-8">
          <h1 className="font-serif text-[clamp(2rem,5vw,3rem)] font-medium leading-[1.2] text-charcoal mb-6 tracking-[-0.02em] text-center">
            Notes
          </h1>

          {/* Divider */}
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-terracotta to-transparent mx-auto mb-10" />

          {posts.length === 0 ? (
            <p className="text-charcoal/60 font-sans text-center">Henüz yazı yok.</p>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="border-b border-charcoal/10 pb-6 last:border-b-0 last:pb-0"
                >
                  <Link href={`/notes/${post.slug}`} className="group block">
                    <h2 className="font-serif text-xl text-charcoal group-hover:text-terracotta transition-colors duration-300">
                      {post.title}
                    </h2>
                  </Link>
                  {post.excerpt && (
                    <p className="mt-2 text-charcoal/70 font-sans text-sm font-light leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}
                  {post.publishedAt && (
                    <time className="mt-3 block text-xs text-charcoal/50 font-sans tracking-wide">
                      {new Date(post.publishedAt).toLocaleDateString('tr-TR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  )
}
