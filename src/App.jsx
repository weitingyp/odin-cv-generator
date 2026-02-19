import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header, Container } from './components.jsx'

function App() {
  return (
    <div id="container">
      <Header />
      <Container />
    </div>
  )
}

export default App
