import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <p className="bg-green-600 p-5 text-5xl mb-10">vinay</p>
   <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
   <Card userName="vinay"   />
   
   <Card userName="kumar" btnTxt="visit me" />
   <Card userName="Maurya"  btnTxt="hire me" />

   </div>

    </>
  )
}

export default App
