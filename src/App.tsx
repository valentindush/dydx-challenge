import { useEffect, useState } from 'react'
import { getRoomsById, roomIds } from './utils/api'
import Room from './components/room/room'
function App() {
  

  const getData = async () => {
    const data = await getRoomsById(roomIds)
  }

  // useEffect(() => {
  //   getData()
  // }, [])

  return (
    <div className="App">
     <Room />
    </div>
  )
}

export default App
