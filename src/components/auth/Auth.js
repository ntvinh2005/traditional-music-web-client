import React from 'react'
import Login from './Login'
import Register from './Register'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const Auth = ({ authRoute }) => {
    const {authState: {authLoading, isAuthenticated}} = useContext(AuthContext)
    let body
    if (authLoading){
        console.log("Auth Loading: "+authLoading)
        body=(
        <h1>Loading</h1>
        )}
    else if (isAuthenticated) {
        return <Navigate to='/home'></Navigate>
    }
    else
        body = (
        <>
            {authRoute === 'login' && <Login />}
            {authRoute === 'register' && <Register />}
        </>
        )
  return (
    <div>{body}</div>
  )
}

export default Auth