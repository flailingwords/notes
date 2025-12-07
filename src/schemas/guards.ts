/*
 * DO NOT EDIT! THIS FILE IS GENERATED!
 */
import type { Frontmatter } from './types'

import { zFrontmatter } from './frontmatter'

export const isFrontmatter = (inp?: unknown): inp is Frontmatter =>
    zFrontmatter.safeParse(inp).success
