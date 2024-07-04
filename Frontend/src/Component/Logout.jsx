import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from "react-hot-toast";

function Logout() {
  const [authUser,setAuthUser]=useAuth();
  const handleLogout=()=>{
    try{
      setAuthUser({
        ...authUser,
        user:null
      })
      localStorage.removeItem("Users")
      toast.success("Logout Successfully")
      setTimeout(() => {
        window.location.reload()
      }, 1000);
      
    }catch(error){
      toast.error("Error :" + error)
    }
  }
  return (
    <div>
        <a className="btn bg-red-500 text-white" onClick={handleLogout}>Logout</a>
    </div>
  )
}

export default Logout