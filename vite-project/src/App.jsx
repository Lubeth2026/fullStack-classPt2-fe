
import { useEffect, useState } from 'react'
import Items from './components/Items'
import AddResource from './components/AddResource';
import './App.css'

function App() {
  const [health, setHealth] = useState("")
  async function getHealth() {
    const BACKEND_URL = import.meta.env.VITE_BACKEND;
    const res = await fetch(BACKEND_URL + "/health")
    const {healthy} = await res.json()
    setHealth(healthy)
  }

  useEffect(()=>{
    getHealth()
  }, [])
  
  if(!health){
    return <p>Something went wrong.</p>
  }

  return (
    <>
      <h1>Front End Class pt.2</h1>
      <h2>{health && "Welcome!"}</h2>
      {health && <Items />}
      <AddResource />
   </>
  )
}

export default App
