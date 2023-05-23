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

  return <div >
    <h1>Turn the light on and off by clicking the bulb!</h1>
    <img src={LightOn} />
  </div>
}

export default App
