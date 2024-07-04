import React from 'react'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import Footer from './Component/Footer'
import Freebook from './Component/Freebook'
import Courses from './Courses/Courses'
import Signup from './Component/Signup'
import Contact from './Component/Contact'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider"

function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path='/' element={[<Navbar/>,<Banner/>,<Freebook/>,<Footer/>]} />
        <Route path='/courses' element={authUser ? <Courses/> : <Navigate to="/signup"/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App