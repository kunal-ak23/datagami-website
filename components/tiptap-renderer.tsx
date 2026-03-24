'use client'

import { generateHTML } from '@tiptap/html'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'

const extensions = [StarterKit, Image, Link]

export function TipTapRenderer({ content }: { content: string }) {
  try {
    const json = JSON.parse(content)
    const html = generateHTML(json, extensions)

    return (
      <div
        className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-dark prose-p:text-body prose-a:text-brand prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  } catch {
    return (
      <div className="prose prose-lg max-w-none">
        <p className="text-muted-brand">Unable to render content.</p>
      </div>
    )
  }
}
