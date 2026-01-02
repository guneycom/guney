import type { CollectionConfig } from 'payload'
import { revalidatePath } from 'next/cache'

export const Blog: CollectionConfig = {
  slug: 'blog',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'publishedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Başlık',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (data?.title && !value) {
              return data.title
                .toLowerCase()
                .replace(/ğ/g, 'g')
                .replace(/ü/g, 'u')
                .replace(/ş/g, 's')
                .replace(/ı/g, 'i')
                .replace(/ö/g, 'o')
                .replace(/ç/g, 'c')
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-')
                .trim()
            }
            return value
          },
        ],
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Özet',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'İçerik',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Kapak Görseli',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        { label: 'Taslak', value: 'draft' },
        { label: 'Yayında', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
      label: 'Durum',
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      label: 'Yayın Tarihi',
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc, previousDoc, req: { payload, context } }) => {
        if (!context?.disableRevalidate) {
          // Revalidate notes list page
          revalidatePath('/notes')

          // Revalidate individual post
          if (doc.status === 'published') {
            payload.logger.info(`Revalidating note: /notes/${doc.slug}`)
            revalidatePath(`/notes/${doc.slug}`)
          }

          // If previously published but now draft, revalidate old path
          if (previousDoc?.status === 'published' && doc.status !== 'published') {
            revalidatePath(`/notes/${previousDoc.slug}`)
          }
        }
        return doc
      },
    ],
    afterDelete: [
      async ({ doc, req: { context } }) => {
        if (!context?.disableRevalidate && doc?.slug) {
          revalidatePath('/notes')
          revalidatePath(`/notes/${doc.slug}`)
        }
        return doc
      },
    ],
  },
}
