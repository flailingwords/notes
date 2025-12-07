import { z } from 'zod'

export const zFrontmatter = z.object({
    id: z.union([z.string(), z.number()]),
    title: z.string().nullish(),
    categories: z.string().array().nullish(),
    authors: z.string().array().nullish()
})
