import type { FC } from 'react'

import Markdown from 'markdown-to-jsx'

import type { MarkdownWrapperProps } from './MarkdownWrapper.types'

const MarkdownWrapper: FC<MarkdownWrapperProps> = ({
    data,
    docEndpoint,
    frontMatter
}) => (
    <div className='markdown-wrapper'>
        <h1>{frontMatter?.title ?? docEndpoint}</h1>
        <Markdown className='external text-left text-wrap wrap-normal *:my-2.5 *:text-wrap'>
            {data}
        </Markdown>
    </div>
)

export default MarkdownWrapper
