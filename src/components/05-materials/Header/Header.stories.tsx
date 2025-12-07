import type { Meta, StoryObj } from '@storybook/react-vite'

import ThemeProvider from '@/components/08-providers/ThemeProvider/ThemeProvider'

import Header from './Header'

const meta = {
    component: Header
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    render: () => (
        <ThemeProvider>
            <Header />
        </ThemeProvider>
    )
}
