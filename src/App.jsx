
import React from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    // <h1 class="text-8xl font-bold underline">App</h1>
    <>
    <nav>Navbar</nav>
    <Outlet/>
    <footer>Footer</footer>
    </>
    
  )
}

export default App

// Go to appjsx to make visisble the root path by using outlet to render all the children
// we will include child and use outlets
// The children of router in router will render in outlet
// components are rendered here
// components are different from pages