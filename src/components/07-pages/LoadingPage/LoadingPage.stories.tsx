import type { Meta, StoryObj } from '@storybook/react-vite'

import LoadingPage from './LoadingPage'

const meta = {
    component: LoadingPage
} satisfies Meta<typeof LoadingPage>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {}
}
