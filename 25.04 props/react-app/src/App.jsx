
import './App.css'
import Main from './components/Main'

function App() {

const products=[
  {id:1,name:"nike",price:400},
  {id:2,name:"adidas",price:300}
]
  return (
    <>
     <Main products={products}/>
    </>
  )
}

export default App
