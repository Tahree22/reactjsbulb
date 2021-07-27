import logo from './logo.svg';
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
        <h1>Turn on the light by clicking the switch</h1>
        <img className ="bulbs" src={isOn ? onBulb : moreOf} alt ="off bulb"/>
        <button className="bulb-switch" onClick={bulbSwitch}>Switch</button>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Tari.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;