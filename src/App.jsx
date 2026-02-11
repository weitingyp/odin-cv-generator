import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header, Form, GeneratedCV } from './components.jsx'

function App() {
  return (
    <div id="container">
      <Header />
      <div id="main-container">
        <Form />
        <GeneratedCV />
      </div>
    </div>
  )
}

export default App
