
import { useState } from 'react';
import AddForm from './components/AddForm'
import Courses from './components/Courses'
import courses from './components/data/db'
import './App.css'

function App() {
 const [data, setData] = useState(courses);
const [searchQuery,setSearchQuery]=useState("");
  const filteredCourses=data.filter((q)=>{
    return q.name.toLowerCase().trim().includes(searchQuery.trim().toLocaleLowerCase());
  })
  return (
    <>
     <AddForm data={data} setData={setData}/>
     <Courses data={filteredCourses}/>
    </>
  )
}

export default App
