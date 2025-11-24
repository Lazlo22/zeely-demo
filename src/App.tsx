import { type FC } from 'react'
import { ChangeBackgroundButton } from './components/home/ChangeBackgroundButton'
import { AvatarBackgroundSheet } from './components/sheets/avatars/BackgroundSheet'

import './App.css'

const App: FC = () => {
  return (
    <>
      <div className='size-full flex flex-col gap-6 items-center justify-center'>
        <h1 className='text-4xl font-bold'>Zeely demo</h1>
        <ChangeBackgroundButton />
      </div>
      
      <AvatarBackgroundSheet />
    </>
  )
}

export default App
