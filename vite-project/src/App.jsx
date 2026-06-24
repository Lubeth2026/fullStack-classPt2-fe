
import { useEffect, useState } from 'react'
import Items from './components/Items'
import AddResource from './components/AddResource';
import './App.css'

function App() {
  const [health, setHealth] = useState("");
  const [items, setItems] = useState("");

  async function getHealth() {
    const BACKEND_URL = import.meta.env.VITE_BACKEND;
    const res = await fetch(BACKEND_URL + "/health")
    const {healthy} = await res.json()
    setHealth(healthy)
  }

  async function getItems() {
    try {
      const BACKEND = import.meta.env.VITE_BACKEND;
      const res = await fetch(BACKEND + "/api/resources");
      const data = await res.json();
      setItems(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
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
      {health && <Items items={items} getItems={getItems} />}
      <AddResource getItems={getItems} />
    </>
  );
}

export default App
