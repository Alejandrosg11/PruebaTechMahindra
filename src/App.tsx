import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppSelector } from './hooks/store';
import { MatchGame } from './components/MatchGame';

function App() {
  const stacks = useAppSelector((state) => state.stacks);
  const countries = {Germany: "Berlin", France: "Paris", China: "Beijing"};

  console.log(stacks);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <MatchGame data={countries} />
      </div>
    </>
  )
}

export default App
