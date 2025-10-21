import { useState } from 'react'
import Main from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Main/>
  )
}

export default App
