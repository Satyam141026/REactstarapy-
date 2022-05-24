import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [data ,setData]=useState("satyam")
  let myfunction=(e)=>{

console.log(data);

  }
  return (
    <div className="App">
  <form>
      <label>Enter your name:
        <input type="text" value={data} onChange={(e)=>{setData(e.target.value)}} />
      </label>
      <button type="button" name="student" onClick={myfunction} >Click here</button>
    </form>
    </div>
  );
}

export default App;
