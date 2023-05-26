import "./App.css";
import LightOnImg from "./assets/lighton.png";
import LightOffImg from "./assets/lightoff.png";
import { useState } from "react";

function App() {
  return (
    <>
      <Light />
    </>
  );
}

function Light() {
  const [lightOn, setLighton] = useState("on");

  function HandelerLightOn() {
    setLighton("on");
  }
  function HandelerLightOff() {
    setLighton("off");
  }

  return (
    <div>
      <h1>Click the buttons to turn on or off the light</h1>
      <img src={lightOn === "on" ? LightOnImg : LightOffImg} />
      <div>
        <button onClick={HandelerLightOn}>On</button>
        <button onClick={HandelerLightOff}>Turn Off</button>
      </div>
    </div>
  );
}
export default App;
