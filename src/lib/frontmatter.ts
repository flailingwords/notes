import { parseAllDocuments } from 'yaml'

import type { Frontmatter } from '@/schemas/types'

import { isFrontmatter } from '@/schemas/guards'

export const handleFrontMatter = (data: string): Frontmatter | null => {
    try {
        const frontMatter: unknown = parseAllDocuments(data)[0].toJS()

        if (!isFrontmatter(frontMatter))
            throw new Error('Frontmatter was not an object')

        return frontMatter
    } catch (err) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- But it is most definitely an error
        console.warn('No valid or missing frontmatter:', (err as Error).message)

        return null
    }
}
