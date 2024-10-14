import { useState } from 'react'

import './App.css'
import ImageViewer from './Imageviewer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImageViewer/>
    </>
  )
}

export default App
