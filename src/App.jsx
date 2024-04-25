import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen flex flex-col gap-8 bg-gray-900'>
     <h1 className='w-full text-gray-300 text-center mt-8 text-4xl'>Pues un cafecito, no?</h1>
     <div className='w-auto h-auto '>

     <img className='w-full h-full ' src='https://c.tenor.com/3Wb9efNi86EAAAAd/tenor.gif' />
     </div>
    </div>
  )
}

export default App
