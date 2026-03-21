'use client'

import { useState, useCallback, useEffect } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import {
  Bold,
  Italic,
  Strikethrough,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Code2,
  ImageIcon,
  Link as LinkIcon,
  ChevronDown,
  ChevronRight,
  Loader2,
} from 'lucide-react'
import { ImageUpload } from './image-upload'
import { TagInput } from './tag-input'

export interface BlogPostData {
  title: string
  slug: string
  content: string
  excerpt: string
  category: string
  featuredImage: string
  status: 'DRAFT' | 'PUBLISHED'
  metaTitle: string
  metaDescription: string
  ogImage: string
  keywords: string[]
  schemaType: string
}

interface BlogEditorProps {
  initialData?: BlogPostData
  onSubmit: (data: BlogPostData) => Promise<void>
  submitLabel?: string
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

const CATEGORIES = ['Technology', 'Education', 'Finance', 'Careers']
const SCHEMA_TYPES = ['Article', 'HowTo', 'FAQ', 'NewsArticle']

export function BlogEditor({ initialData, onSubmit, submitLabel }: BlogEditorProps) {
  const [title, setTitle] = useState(initialData?.title || '')
  const [slug, setSlug] = useState(initialData?.slug || '')
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '')
  const [category, setCategory] = useState(initialData?.category || CATEGORIES[0])
  const [featuredImage, setFeaturedImage] = useState(initialData?.featuredImage || '')
  const [status, setStatus] = useState<'DRAFT' | 'PUBLISHED'>(initialData?.status || 'DRAFT')
  const [metaTitle, setMetaTitle] = useState(initialData?.metaTitle || '')
  const [metaDescription, setMetaDescription] = useState(initialData?.metaDescription || '')
  const [ogImage, setOgImage] = useState(initialData?.ogImage || '')
  const [keywords, setKeywords] = useState<string[]>(initialData?.keywords || [])
  const [schemaType, setSchemaType] = useState(initialData?.schemaType || 'Article')
  const [submitting, setSubmitting] = useState(false)
  const [seoOpen, setSeoOpen] = useState(false)
  const [geoOpen, setGeoOpen] = useState(false)
  const [showImageUpload, setShowImageUpload] = useState(false)
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false)

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
      }),
      Image,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { rel: 'noopener noreferrer', target: '_blank' },
      }),
      Placeholder.configure({
        placeholder: 'Start writing your blog post...',
      }),
    ],
    content: initialData?.content ? JSON.parse(initialData.content) : undefined,
    editorProps: {
      attributes: {
        class:
          'prose prose-invert max-w-none min-h-[400px] focus:outline-none px-4 py-3',
      },
    },
  })

  // Auto-generate slug from title
  useEffect(() => {
    if (!slugManuallyEdited && title) {
      setSlug(slugify(title))
    }
  }, [title, slugManuallyEdited])

  const handleInsertImage = useCallback(
    (url: string) => {
      if (editor) {
        editor.chain().focus().setImage({ src: url }).run()
        setShowImageUpload(false)
      }
    },
    [editor]
  )

  const handleInsertLink = useCallback(() => {
    if (!editor) return
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('Enter URL', previousUrl || 'https://')
    if (url === null) return
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  }, [editor])

  const handleSubmit = async (submitStatus: 'DRAFT' | 'PUBLISHED') => {
    if (!editor) return
    setSubmitting(true)
    try {
      await onSubmit({
        title,
        slug,
        content: JSON.stringify(editor.getJSON()),
        excerpt,
        category,
        featuredImage,
        status: submitStatus,
        metaTitle,
        metaDescription,
        ogImage,
        keywords,
        schemaType,
      })
    } catch (error) {
      console.error('Submit error:', error)
      alert(error instanceof Error ? error.message : 'Failed to save')
    } finally {
      setSubmitting(false)
    }
  }

  if (!editor) return null

  return (
    <div className="flex gap-6">
      {/* Main Editor Area */}
      <div className="flex-1 min-w-0 space-y-4">
        {/* Title */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
          className="w-full text-2xl font-bold bg-transparent border-none text-white placeholder:text-gray-500 focus:outline-none"
        />

        {/* Slug */}
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>/blog/</span>
          <input
            type="text"
            value={slug}
            onChange={(e) => {
              setSlugManuallyEdited(true)
              setSlug(slugify(e.target.value))
            }}
            className="flex-1 bg-gray-900 border border-gray-700 rounded px-2 py-1 text-white text-sm focus:border-brand focus:outline-none"
          />
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-1 rounded-lg border border-gray-700 bg-gray-900 p-1">
          <ToolbarButton
            active={editor.isActive('bold')}
            onClick={() => editor.chain().focus().toggleBold().run()}
            title="Bold"
          >
            <Bold className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            active={editor.isActive('italic')}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            title="Italic"
          >
            <Italic className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            active={editor.isActive('strike')}
            onClick={() => editor.chain().focus().toggleStrike().run()}
            title="Strikethrough"
          >
            <Strikethrough className="h-4 w-4" />
          </ToolbarButton>

          <div className="w-px h-6 bg-gray-700 mx-1" />

          <ToolbarButton
            active={editor.isActive('heading', { level: 2 })}
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            title="Heading 2"
          >
            <Heading2 className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            active={editor.isActive('heading', { level: 3 })}
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            title="Heading 3"
          >
            <Heading3 className="h-4 w-4" />
          </ToolbarButton>

          <div className="w-px h-6 bg-gray-700 mx-1" />

          <ToolbarButton
            active={editor.isActive('bulletList')}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            title="Bullet List"
          >
            <List className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            active={editor.isActive('orderedList')}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            title="Ordered List"
          >
            <ListOrdered className="h-4 w-4" />
          </ToolbarButton>

          <div className="w-px h-6 bg-gray-700 mx-1" />

          <ToolbarButton
            active={editor.isActive('blockquote')}
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            title="Blockquote"
          >
            <Quote className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            active={editor.isActive('codeBlock')}
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            title="Code Block"
          >
            <Code2 className="h-4 w-4" />
          </ToolbarButton>

          <div className="w-px h-6 bg-gray-700 mx-1" />

          <ToolbarButton
            active={false}
            onClick={() => setShowImageUpload(!showImageUpload)}
            title="Insert Image"
          >
            <ImageIcon className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            active={editor.isActive('link')}
            onClick={handleInsertLink}
            title="Insert Link"
          >
            <LinkIcon className="h-4 w-4" />
          </ToolbarButton>
        </div>

        {/* Image Upload Dialog */}
        {showImageUpload && (
          <div className="rounded-lg border border-gray-700 bg-gray-900 p-4">
            <p className="text-sm text-gray-400 mb-3">Upload an image to insert into the editor</p>
            <ImageUpload
              container="blog-images"
              onUpload={handleInsertImage}
            />
          </div>
        )}

        {/* Editor */}
        <div className="rounded-lg border border-gray-700 bg-gray-900">
          <EditorContent editor={editor} />
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-80 shrink-0 space-y-6">
        {/* Publish Section */}
        <div className="rounded-lg border border-gray-700 bg-gray-900 p-4 space-y-4">
          <h3 className="text-sm font-semibold text-white">Publish</h3>

          <div>
            <label className="text-xs text-gray-400 block mb-1">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as 'DRAFT' | 'PUBLISHED')}
              className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white focus:border-brand focus:outline-none"
            >
              <option value="DRAFT">Draft</option>
              <option value="PUBLISHED">Published</option>
            </select>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => handleSubmit('DRAFT')}
              disabled={submitting}
              className="flex-1 rounded-lg border border-gray-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 disabled:opacity-50"
            >
              Save Draft
            </button>
            <button
              type="button"
              onClick={() => handleSubmit('PUBLISHED')}
              disabled={submitting}
              className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-dark transition-colors hover:bg-brand-dark disabled:opacity-50"
            >
              {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
              {submitLabel || 'Publish'}
            </button>
          </div>
        </div>

        {/* Category */}
        <div className="rounded-lg border border-gray-700 bg-gray-900 p-4 space-y-2">
          <label className="text-sm font-semibold text-white block">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white focus:border-brand focus:outline-none"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Featured Image */}
        <div className="rounded-lg border border-gray-700 bg-gray-900 p-4 space-y-2">
          <label className="text-sm font-semibold text-white block">Featured Image</label>
          <ImageUpload
            container="blog-images"
            onUpload={setFeaturedImage}
            currentImage={featuredImage}
          />
        </div>

        {/* Excerpt */}
        <div className="rounded-lg border border-gray-700 bg-gray-900 p-4 space-y-2">
          <label className="text-sm font-semibold text-white block">Excerpt</label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value.slice(0, 500))}
            placeholder="Brief description of the post..."
            rows={3}
            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-brand focus:outline-none resize-none"
          />
          <p className="text-xs text-gray-500 text-right">{excerpt.length}/500</p>
        </div>

        {/* SEO Section */}
        <div className="rounded-lg border border-gray-700 bg-gray-900">
          <button
            type="button"
            onClick={() => setSeoOpen(!seoOpen)}
            className="flex w-full items-center justify-between p-4 text-sm font-semibold text-white"
          >
            SEO Settings
            {seoOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          {seoOpen && (
            <div className="border-t border-gray-700 p-4 space-y-4">
              <div>
                <label className="text-xs text-gray-400 block mb-1">Meta Title</label>
                <input
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value.slice(0, 70))}
                  placeholder="SEO title"
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-brand focus:outline-none"
                />
                <p className="text-xs text-gray-500 text-right mt-1">{metaTitle.length}/70</p>
              </div>

              <div>
                <label className="text-xs text-gray-400 block mb-1">Meta Description</label>
                <textarea
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value.slice(0, 160))}
                  placeholder="SEO description"
                  rows={3}
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-brand focus:outline-none resize-none"
                />
                <p className="text-xs text-gray-500 text-right mt-1">
                  {metaDescription.length}/160
                </p>
              </div>

              <div>
                <label className="text-xs text-gray-400 block mb-1">OG Image</label>
                <ImageUpload
                  container="og-images"
                  onUpload={setOgImage}
                  currentImage={ogImage}
                />
              </div>
            </div>
          )}
        </div>

        {/* GEO Section */}
        <div className="rounded-lg border border-gray-700 bg-gray-900">
          <button
            type="button"
            onClick={() => setGeoOpen(!geoOpen)}
            className="flex w-full items-center justify-between p-4 text-sm font-semibold text-white"
          >
            GEO Settings
            {geoOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          {geoOpen && (
            <div className="border-t border-gray-700 p-4 space-y-4">
              <div>
                <label className="text-xs text-gray-400 block mb-1">Keywords</label>
                <TagInput
                  tags={keywords}
                  onChange={setKeywords}
                  placeholder="Add keywords..."
                />
              </div>

              <div>
                <label className="text-xs text-gray-400 block mb-1">Schema Type</label>
                <select
                  value={schemaType}
                  onChange={(e) => setSchemaType(e.target.value)}
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white focus:border-brand focus:outline-none"
                >
                  {SCHEMA_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function ToolbarButton({
  active,
  onClick,
  title,
  children,
}: {
  active: boolean
  onClick: () => void
  title: string
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`rounded p-2 transition-colors ${
        active
          ? 'bg-brand/20 text-brand'
          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
      }`}
    >
      {children}
    </button>
  )
}
