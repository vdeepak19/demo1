import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to Project Homepage</h1>
      <Link to="/page1">Go To Page1</Link>
      <Link to ="/page2">Go TO Page2</Link>
    </>
  )
}

export default App
