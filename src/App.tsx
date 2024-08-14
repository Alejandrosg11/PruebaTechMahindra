import reactLogo from './assets/react.svg'
import './App.css'
import { MatchGame } from './components/MatchGame';

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <MatchGame data={{Germany: "Berlin", France: "Paris", China: "Beijing"}} />
      </div>
    </>
  )
}

export default App
