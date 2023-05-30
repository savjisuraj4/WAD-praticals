import './App.css';
import React,{useState} from 'react';
function App() {

  const [count,setCount]=useState(0);
  return (
    <div className="App">
        <h1>You clicked <span>{count}</span> times</h1>
        <button onClick={()=>setCount(count+1)}>Click Me</button>
    </div>
  );
}

export default App;
