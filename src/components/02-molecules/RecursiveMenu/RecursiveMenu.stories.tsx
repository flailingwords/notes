/* eslint-disable @typescript-eslint/naming-convention -- YOLO */
import type { Meta, StoryObj } from '@storybook/react-vite'

import MainSideBarMenu from '@/components/05-materials/MainSideBarMenu/MainSideBarMenu'
import DocsIndexProvider from '@/components/08-providers/DocsIndexProvider/DocsIndexProvider'

import RecursiveMenu from './RecursiveMenu'

const meta = {
    component: RecursiveMenu
} satisfies Meta<typeof RecursiveMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    render: () => (
        <div>
            menu
            <br />
            <DocsIndexProvider>
                <MainSideBarMenu />
            </DocsIndexProvider>
        </div>
    ),
    args: {
        taxonomy: {
            tech: {
                web: {
                    css: {
                        properties: {
                            'Box Shadow':
                                '/docs/tech/web/css/properties/box-shadow.md',
                            'Border Radius':
                                '/docs/tech/web/css/properties/border-radius.md'
                        }
                    }
                }
            },
            science: {
                mathematics: {
                    trigonometry: {
                        Angles: '/docs/science/mathematics/trigonometry/angles.md'
                    }
                }
            }
        }
    }
}
