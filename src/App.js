
import './App.css';
import {useState } from 'react';
import swal from 'sweetalert';

function App() {

  const [studentname ,setData]=useState("satyam")
  //useEffect(() => {

  //},[]);
  let myfunction=()=>{

console.log(studentname)
var data={
   "data": {
  "Name": studentname 
}
}

fetch(
  'https://ancient-oasis-43602.herokuapp.com/api/students', { method: 'POST',
  headers:{
    'Content-Type': 'application/json', 
  //  'accept: application/json'
  },
  body: JSON.stringify(data)
}).then((d)=>{console.log(d.status)
if(d.status=== 200){

swal("Great Job","data created success","succss")

}

}).catch((e)=>{

  swal("Great Job","bad","fail")

}).finally((all)=>{
 
  
});
  }
  return (
    <div className="App">
      {studentname }
  <form>
      <label>Enter your name:
        <input type="text" value={studentname} onChange={(e)=>{setData(e.target.value)}} />
      </label>
      <input type="button" name="student" onClick={myfunction} value="save button" />
    </form>
    </div>
  );
}

export default App;
