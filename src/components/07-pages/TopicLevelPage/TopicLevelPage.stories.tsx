import type { Meta, StoryObj } from '@storybook/react-vite'

import TopicLevelPage from './TopicLevelPage'

const meta = {
    component: TopicLevelPage
} satisfies Meta<typeof TopicLevelPage>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        childNodes: {
            'Topic 1': '/topic1',
            'Topic 2': '/topic2'
        }
    }
}
