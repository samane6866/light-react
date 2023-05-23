import './App.css'
import LightOnImg from './assets/lighton.png'
import LightOffImg from './assets/lightoff.png'

function App() {

  return (
    <>
      <Light />
    </>
  )
}

function Light() {

  return <div>
    <h1>Click the buttons to turn on or off the light</h1>
    <img src={LightOnImg} />
    <div><button>Turn On</button><button>Turn Off</button></div>
  </div>
}

export default App
