import './App.css';
import moreOf from "./images/moreoff.png";
import onBulb from "./images/on-bulb.png";
import {useState} from 'react';



function App() {
  const [isOn, setIsOn] = useState(false);

  const bulbSwitch = ()=> {
    if (isOn === true){
      setIsOn(false);
    }
    else{
      setIsOn(true);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Turn {isOn?<span>off</span>:<span>on</span>} the light by clicking the switch</h1>
        <img className ="bulbs" src={isOn ? onBulb : moreOf} alt ="off bulb"/>
        <button className="bulb-switch" onClick={bulbSwitch}>Switch</button>
      </header>
    </div>
  );
}

export default App;