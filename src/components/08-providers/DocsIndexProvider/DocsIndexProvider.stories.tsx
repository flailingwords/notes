import type { Meta, StoryObj } from '@storybook/react-vite'

import DocsIndexProvider from './DocsIndexProvider'

const meta: Meta = {
    component: DocsIndexProvider
} satisfies Meta<typeof DocsIndexProvider>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {}
}
