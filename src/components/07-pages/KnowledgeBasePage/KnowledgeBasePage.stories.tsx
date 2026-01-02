import type { Meta, StoryObj } from '@storybook/react-vite'

import KnowledgeBasePage from './KnowledgeBasePage'

const meta: Meta = {
    component: KnowledgeBasePage
} satisfies Meta<typeof KnowledgeBasePage>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {}
}
