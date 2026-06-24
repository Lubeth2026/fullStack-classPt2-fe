
import React, { useState } from 'react'

function AddResource() {
    const [title, setTitle] = useState("")
    const [status, setStatus] = useState("")

  async function createResource(){
    preventDefault()
    const BACKEND = import.meta.env.VITE_BACKEND
    const resource = {title, status}
    const options = {
        method: "POST",
        body: JSON.stringify(resource),
        headers: { "Content-Type": "application/json", }
    }
    const res = await fetch(BACKEND, "/api/resources", options)
    const data = await res.json()
    //console.log("Created!", data)//
  }

  function handleTitle(event){
    setTitle(event.target.value)
  }

  function handleStatus(event){
    setStatus(event.target.value)
  }
    
  return (
    <div>
        <form >
            <label htmlFor="title">
                Title
                <input type="text" name="title" id="title" value={title} onChange={handleTitle} />
            </label>
            <label htmlFor="status">
                Status
                <input type="text" name="status" id="status" value={status} onChange={handleStatus} />
            </label>
            <button type="submit" onSubmit={createResource}>Send</button>
        </form>
    </div>
  )
}

export default AddResource