import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
import { BackgroundElements } from '@/app/(frontend)/components/background'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'blog',
    where: { status: { equals: 'published' } },
    limit: 100,
    select: { slug: true },
  })

  return docs.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'blog',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const post = docs[0]
  if (!post) return { title: 'Yazı bulunamadı' }

  return {
    title: `${post.title} | güneye giderken`,
    description: post.excerpt || undefined,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'blog',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    depth: 2,
    limit: 1,
  })

  const post = docs[0]
  if (!post) notFound()

  const featuredImage = typeof post.featuredImage === 'object' ? post.featuredImage : null

  return (
    <>
      {/* Background Elements */}
      <BackgroundElements />

      {/* Back Link */}
      <Link
        href="/notes"
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
        Notes
      </Link>

      {/* Main Content */}
      <main className="relative z-20 min-h-screen flex flex-col justify-center items-center p-8 pt-24 pb-32 max-sm:p-4 max-sm:pt-20">
        <article className="max-w-[640px] w-full max-h-[75vh] overflow-y-auto bg-cream p-12 rounded-[20px] shadow-[0_8px_40px_rgba(44,42,38,0.08),0_2px_8px_rgba(44,42,38,0.04)] max-sm:max-h-[85vh] max-sm:p-8">
          <header className="text-center mb-8">
            <h1 className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-medium leading-[1.2] text-charcoal mb-4 tracking-[-0.02em]">
              {post.title}
            </h1>
            {post.publishedAt && (
              <time className="text-xs text-charcoal/50 font-sans tracking-wide">
                {new Date(post.publishedAt).toLocaleDateString('tr-TR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
          </header>

          {/* Divider */}
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-terracotta to-transparent mx-auto mb-10" />

          {featuredImage?.url && (
            <div className="mb-8 rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(44,42,38,0.06)]">
              <Image
                src={featuredImage.url}
                alt={featuredImage.alt || post.title}
                width={featuredImage.width || 800}
                height={featuredImage.height || 450}
                className="w-full h-auto"
                priority
              />
            </div>
          )}

          <div className="font-sans">
            {post.content && renderRichText(post.content)}
          </div>
        </article>
      </main>
    </>
  )
}

// Simple rich text renderer for Lexical content
function renderRichText(content: unknown): React.ReactNode {
  if (!content || typeof content !== 'object') return null

  const root = (content as { root?: { children?: unknown[] } }).root
  if (!root?.children) return null

  return root.children.map((node: unknown, index: number) => {
    const typedNode = node as {
      type?: string
      children?: unknown[]
      tag?: string
      format?: string
      url?: string
      text?: string
      value?: { url?: string; alt?: string; width?: number; height?: number }
      relationTo?: string
    }

    if (typedNode.type === 'paragraph') {
      return (
        <p key={index} className="mb-4 text-charcoal/85 text-base font-light leading-relaxed">
          {renderChildren(typedNode.children)}
        </p>
      )
    }

    if (typedNode.type === 'heading') {
      const tag = (typedNode.tag || 'h2') as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
      const headingClasses = tag === 'h2'
        ? 'font-serif text-xl text-terracotta mt-10 mb-4 tracking-tight'
        : 'font-serif text-lg text-charcoal mt-8 mb-3'

      if (tag === 'h1') return <h1 key={index} className={headingClasses}>{renderChildren(typedNode.children)}</h1>
      if (tag === 'h2') return <h2 key={index} className={headingClasses}>{renderChildren(typedNode.children)}</h2>
      if (tag === 'h3') return <h3 key={index} className={headingClasses}>{renderChildren(typedNode.children)}</h3>
      if (tag === 'h4') return <h4 key={index} className={headingClasses}>{renderChildren(typedNode.children)}</h4>
      if (tag === 'h5') return <h5 key={index} className={headingClasses}>{renderChildren(typedNode.children)}</h5>
      return <h6 key={index} className={headingClasses}>{renderChildren(typedNode.children)}</h6>
    }

    if (typedNode.type === 'list') {
      const Tag = typedNode.tag === 'ol' ? 'ol' : 'ul'
      return (
        <Tag key={index} className="mb-4 pl-0 list-none">
          {renderChildren(typedNode.children)}
        </Tag>
      )
    }

    if (typedNode.type === 'listitem') {
      return (
        <li key={index} className="text-base font-light leading-relaxed text-charcoal/85 pl-6 relative mb-2 before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:bg-terracotta before:rounded-full">
          {renderChildren(typedNode.children)}
        </li>
      )
    }

    if (typedNode.type === 'quote') {
      return (
        <blockquote key={index} className="border-l-2 border-terracotta/40 pl-6 italic my-6 text-charcoal/70">
          {renderChildren(typedNode.children)}
        </blockquote>
      )
    }

    // Handle upload/image blocks
    if (typedNode.type === 'upload' && typedNode.value?.url) {
      return (
        <figure key={index} className="my-8">
          <Image
            src={typedNode.value.url}
            alt={typedNode.value.alt || ''}
            width={typedNode.value.width || 800}
            height={typedNode.value.height || 450}
            className="w-full h-auto rounded-xl shadow-[0_4px_20px_rgba(44,42,38,0.06)]"
          />
        </figure>
      )
    }

    // Handle block type (another way Payload stores uploads)
    if (typedNode.type === 'block') {
      return null // Skip custom blocks for now
    }

    return null
  })
}

function renderChildren(children?: unknown[]): React.ReactNode {
  if (!children) return null

  return children.map((child: unknown, index: number) => {
    const typedChild = child as { type?: string; text?: string; format?: number; url?: string; children?: unknown[] }

    if (typedChild.type === 'text') {
      let text: React.ReactNode = typedChild.text || ''

      if (typedChild.format) {
        if (typedChild.format & 1) text = <strong key={index} className="font-medium text-charcoal">{text}</strong>
        if (typedChild.format & 2) text = <em key={index}>{text}</em>
      }

      return <span key={index}>{text}</span>
    }

    if (typedChild.type === 'link') {
      return (
        <a
          key={index}
          href={typedChild.url}
          className="text-sea no-underline transition-colors duration-300 hover:text-sea-bright"
          target="_blank"
          rel="noopener noreferrer"
        >
          {renderChildren(typedChild.children)}
        </a>
      )
    }

    if (typedChild.type === 'linebreak') {
      return <br key={index} />
    }

    return null
  })
}
