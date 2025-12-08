import type { Meta, StoryObj } from '@storybook/react-vite'

import MainContentContainer from './MainContentContainer'

const meta = {
    component: MainContentContainer
} satisfies Meta<typeof MainContentContainer>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {}
}
