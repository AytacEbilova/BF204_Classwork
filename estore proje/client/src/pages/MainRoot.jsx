import React from 'react'
import Header from '../components/Header'
import {Outlet} from 'react-router-dom'
import Home from './Home'
const MainRoot = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default MainRoot