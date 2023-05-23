import './App.css'
import LightOn from './assets/lighton.png'
import LightOff from './assets/lightoff.png'

function App() {

  return (
    <>
      <Light />
    </>
  )
}

function Light() {

  return <div>
    <h1>Click te bulb to turn off the light!</h1>
    <img src={LightOn} />
  </div>
}

export default App
