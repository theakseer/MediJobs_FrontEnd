
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <main>
        <Navbar />
        <Outlet />
        <footer>Footer</footer>
      </main>
    </>
  )
}

export default App;
