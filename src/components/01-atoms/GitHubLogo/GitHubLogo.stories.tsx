import type { Meta, StoryObj } from '@storybook/react-vite'

import GitHubLogo from './GitHubLogo'

const meta = {
    component: GitHubLogo
} satisfies Meta<typeof GitHubLogo>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {}
}
