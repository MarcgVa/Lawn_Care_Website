import { useState } from 'react'
import Navbar from './components/Navbar';
import './App.css'


function App() {
  const [count,setCount]=useState(0)
  return (
    <>
      
      <Navbar className="flex" />
      
      <div className="bg-green-950 text-9xl text-shadow-green-400 text-shadow-md top-0">
        Lawn Care Group
      </div>
    </>
  );
}

export default App
