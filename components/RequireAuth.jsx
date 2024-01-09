import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Navigate } from 'react-router-dom'

export const RequireAuth = ({children}) => {

    const logged = useContext(AppContext)

    if(!logged.loginState){
        return <Navigate to='/' />
    }

  return children
}