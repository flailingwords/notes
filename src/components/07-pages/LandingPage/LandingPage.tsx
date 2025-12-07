import type { FC } from 'react'

import type { LandingPageProps } from './LandingPage.types'

const LandingPage: FC<LandingPageProps> = () => (
    <main className='p-2'>
        <h1 className='my-3 text-center'>Welcome to Nick&apos;s Notes!</h1>

        <div className='my-3'>
            Nick&apos;s Notes is an accessibility project in the form of brief
            notes that cover a wide range of topics, but in more neurodivergent
            friendly/accessible terms. Think Coles/Cliffs Notes, but for
            neurodivergent and other folks on any topic.
        </div>

        <div className='my-3'>
            Notes in this collection are intended to be short backgrounds, with
            concise explanations and examples to provide quick bites of topics
            that are usually more technical in nature.
        </div>

        <div className='my-3'>
            Beyond that, as part of the Flailing Words Collective, this
            site/repository is intended to be maintained by the community.
            Contributions are encouraged and welcomed!
        </div>

        <div className='my-3'>
            You can find the repository on{' '}
            <a href='https://github.com/flailingwords/notes'>GitHub</a>.
        </div>
    </main>
)
export default LandingPage
