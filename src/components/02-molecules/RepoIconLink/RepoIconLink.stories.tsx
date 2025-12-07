import type { Meta, StoryObj } from '@storybook/react-vite'

import RepoIconLink from './RepoIconLink'

const meta = {
    component: RepoIconLink
} satisfies Meta<typeof RepoIconLink>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {}
}
