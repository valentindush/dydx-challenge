import { useEffect, useState } from 'react'
import { getRoomsById, roomIds } from './utils/api'
function App() {
  

  const getData = async () => {
    const data = await getRoomsById(roomIds)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
     
    </div>
  )
}

export default App
