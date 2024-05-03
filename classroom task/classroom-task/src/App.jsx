import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentRegister from './Register/StudentRegister'
import StudentLogin from './Login/StudentLogin'
import Login from './Login'
import Register from './Register'

function App() {
const[form,setForm]=useState("login")

  return (
    <>
    {form === "login" ? <Login form={form} setForm={setForm}/> : <Register form={form} setForm={setForm}/>}
      {/* <Login/> */}
    <Register/>
    </>
  )
}

export default App
