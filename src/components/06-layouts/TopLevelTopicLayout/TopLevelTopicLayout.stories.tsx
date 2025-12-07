import type { Meta, StoryObj } from '@storybook/react-vite'

import TopLevelTopicLayout from './TopLevelTopicLayout'

const meta = {
    component: TopLevelTopicLayout
} satisfies Meta<typeof TopLevelTopicLayout>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {}
}
