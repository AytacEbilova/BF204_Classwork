import { useEffect, useState } from 'react'
import './App.css'
import Tablee from './components/Table'
import { getAllProducts } from './services/request.js';

function App() {
  const [products,setProducts]=useState([]);

  useEffect(() => {
    getAllProducts().then((response) => {
        setProducts(response);
        console.log(response)
    }).catch((error) => {
        console.log(error.message);
    })
}, []);
  

  return (
    <>
     <Tablee products={products} setProducts={setProducts}/>
    </>
  )
}

export default App
