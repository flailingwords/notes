import type { Frontmatter } from '@/schemas/types'

export interface MarkdownWrapperProps {
    data: string
    docEndpoint: string | null
    frontMatter: Frontmatter | null
}
