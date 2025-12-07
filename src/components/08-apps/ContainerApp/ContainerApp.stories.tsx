import type { Meta, StoryObj } from '@storybook/react-vite'

import ContainerApp from './ContainerApp'

const meta = {
    component: ContainerApp
} satisfies Meta<typeof ContainerApp>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {}
}
