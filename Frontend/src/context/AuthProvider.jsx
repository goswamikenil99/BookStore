import React, { createContext, useContext, useState } from 'react'

export const AuthContextk=createContext()
export default function AuthProvider({children}) {
  const initialAuthuser=localStorage.getItem("Users");
  const [authUser,setAuthUser]=useState(
    initialAuthuser?JSON.parse(initialAuthuser) : undefined
  )
  return (
    <AuthContextk.Provider value={[authUser,setAuthUser]}>
        {children}
    </AuthContextk.Provider>
  )
}
export const useAuth=()=>useContext(AuthContextk);