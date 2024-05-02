import { useState } from 'react'
import './App.css'
import Header from './layout/header'
import { Products } from './data/db'
import Footer from './layout/footer'
import Cards from './components/cards'

function App() {
let fullname="Aytac Ebilova";

  return (
    <>
    <Header fullname={fullname}/>
    <Cards products={Products}/>
    <Footer/>
    </>
  )
}
export default App
