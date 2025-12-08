import type { Meta, StoryObj } from '@storybook/react-vite'

import MarkdownWrapper from './MarkdownWrapper'

const meta = {
    component: MarkdownWrapper
} satisfies Meta<typeof MarkdownWrapper>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {}
}
