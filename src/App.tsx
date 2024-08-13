import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppSelector } from './hooks/store';

function App() {
  const [count, setCount] = useState(0)
  const stacks = useAppSelector((state) => state.stacks);

  console.log(stacks);
  return (
    <>
      
    </>
  )
}

export default App
