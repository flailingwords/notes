import { createElement, type FC } from 'react'

import { Markdown } from 'markdown-to-jsx'

import type { MarkdownWrapperProps } from './MarkdownWrapper.types'

import { fixChildren } from './MarkdownWrapper.ui'

const MarkdownWrapper: FC<MarkdownWrapperProps> = ({
    data,
    docEndpoint,
    frontMatter
}) => (
    <div className='markdown-wrapper'>
        <h1>{frontMatter?.title ?? docEndpoint}</h1>
        <Markdown
            className='external text-left text-wrap wrap-normal *:my-2.5 *:text-wrap'
            options={{
                wrapper: 'span',
                forceWrapper: true,
                createElement(type, props, ...children) {
                    return createElement(type, props, fixChildren(children))
                }
            }}
        >
            {data}
        </Markdown>
    </div>
)

export default MarkdownWrapper
