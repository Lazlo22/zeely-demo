import { Button } from './components/ui/button'

import './App.css'

function App() {
  return (
    <>
      <div className='size-full flex flex-col gap-6 items-center justify-center'>
        <h1 className='text-4xl font-bold'>Zeely demo</h1>
        <Button variant='outline' size='lg'>Change Background</Button>
      </div>
    </>
  )
}

export default App
