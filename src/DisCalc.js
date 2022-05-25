import React from "react";
import "./App.css";
export const DisCalc = () => {
    function display(val)
    {
    document.getElementById("id1").value+=val;
    
    
    }
    function solve()
    {
    let x = document.getElementById("id1").value;
    let y =eval(x);
    document.getElementById("id1").value=y;
    
    
    }
    
    function clr(){
    
        document.getElementById("id1").value=" ";
    
    }




  return (
    <div>
      <div className="title">
        <p>Calculator</p>
      </div>
      <div className="calculator">
        <img src="ab.jpg" alt="satyam" width="300px" />

        <input type="text" className="display" disabled id="id1" />
        <div className="keys">
          <div className="row">
            <button value="7" onClick={()=>display('7')}>
              7
            </button>
            <button value="8"  onClick={()=>display('8')}>
              8
            </button>
            <button value="9"  onClick={()=>display('9')}>
              9
            </button>
            <button value="+"  onClick={()=>display('+')} className="opreators">
              +
            </button>
          </div>
          <div className="row">
            <button value="4"  onClick={()=>display('4')}>
              4
            </button>
            <button value="5"  onClick={()=>display('5')}>
              5
            </button>
            <button value="6"  onClick={()=>display('6')}>
              6
            </button>
            <button value="-" className="opreators"  onClick={()=>display('-')}>
              -
            </button>
          </div>
          <div className="row">
            <button value="1" onClick={()=>display('1')}>
              1
            </button>
            <button value="2" onClick={()=>display('2')}>
              2
            </button>
            <button value="3"  onClick={()=>display('3')}>
              3
            </button>
            <button value="*" className="opreators"  onClick={()=>display('*')}>
              *
            </button>
          </div>
          <div className="row">
            <button value="C" className="opreators" onClick={()=>{clr()}}>
              C
            </button>
            <button value="0" onClick={()=>{display('0')}}>
              0
            </button>
            <button value="/" className="opreators"  onClick={()=>{display('/')}}>
              /
            </button>
            <button value="=" className="equals"  onClick={()=>{solve()}}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
