import React from 'react'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import Footer from './Component/Footer'
import Freebook from './Component/Freebook'
import Courses from './Courses/Courses'
import Signup from './Component/Signup'
import Contact from './Component/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={[<Navbar/>,<Banner/>,<Freebook/>,<Footer/>]} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App