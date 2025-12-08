import type { FC } from 'react'

import '@/styles/index.css'

import { Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import type { AppProps } from './App.types'

import Header from '@/components/05-materials/Header/Header.lazy'
import MainContentContainer from '@/components/05-materials/MainContentContainer/MainContentContainer.lazy'
import MainSideBarMenu from '@/components/05-materials/MainSideBarMenu/MainSideBarMenu.lazy'

const App: FC<AppProps> = () => (
    <>
        <div className='header fixed top-0 right-0 left-0 z-20 h-12 opacity-100'>
            <Header />
        </div>

        <div className='min-h-vh fixed top-20 bottom-0 left-0 z-20 h-full w-0 md:w-56'>
            <MainSideBarMenu />
        </div>

        <div className='main-section main-section-scaled relative top-20 min-h-1/2'>
            <MainContentContainer>
                <Outlet />
            </MainContentContainer>
        </div>
        {import.meta.env.DEV ? <TanStackRouterDevtools /> : null}
    </>
)

export default App
