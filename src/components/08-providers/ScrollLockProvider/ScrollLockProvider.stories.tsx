import type { Meta, StoryObj } from '@storybook/react-vite'

import ScrollLockProvider from './ScrollLockProvider'

const meta: Meta = {
    component: ScrollLockProvider
} satisfies Meta<typeof ScrollLockProvider>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {}
}
