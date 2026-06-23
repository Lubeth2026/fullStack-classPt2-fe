
import { useEffect, useState } from 'react'
import Items from './components/Items'
import './App.css'

function App() {
  const [health, setHealth] = useState("")
  async function getHealth() {
    try {
      const res = await fetch("http://127.0.0.1:5000");
      const data = await res.json()
      setHealth(data.message)
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    getHealth()
  }, [])
  
  return (
    <>
      <h1>Front End Class pt.2</h1>
      <h2>{health}</h2>
      <Items />
   </>
  )
}

export default App
